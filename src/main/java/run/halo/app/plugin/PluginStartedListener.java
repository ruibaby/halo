package run.halo.app.plugin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.pf4j.PluginWrapper;
import org.springframework.context.ApplicationListener;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import run.halo.app.core.extension.Plugin;
import run.halo.app.extension.ExtensionClient;
import run.halo.app.infra.utils.YamlUnstructuredLoader;
import run.halo.app.plugin.event.HaloPluginStartedEvent;

/**
 * Plugin started listener.
 *
 * @author guqing
 * @since 2.0.0
 */
@Component
public class PluginStartedListener implements ApplicationListener<HaloPluginStartedEvent> {

    private final ExtensionClient extensionClient;

    public PluginStartedListener(ExtensionClient extensionClient) {
        this.extensionClient = extensionClient;
    }

    @Override
    public void onApplicationEvent(HaloPluginStartedEvent event) {
        PluginWrapper pluginWrapper = event.getPlugin();
        Plugin plugin =
            extensionClient.fetch(Plugin.class, pluginWrapper.getPluginId()).orElseThrow();
        // load unstructured when plugin started
        DefaultResourceLoader resourceLoader =
            new DefaultResourceLoader(pluginWrapper.getPluginClassLoader());
        plugin.getSpec().getExtensionLocations()
            .stream()
            .map(resourceLoader::getResource)
            .filter(Resource::exists)
            .map(resource -> new YamlUnstructuredLoader(resource).load())
            .flatMap(List::stream)
            .forEach(unstructured -> {
                Map<String, String> labels = unstructured.getMetadata().getLabels();
                if (labels == null) {
                    labels = new HashMap<>();
                    unstructured.getMetadata().setLabels(labels);
                }
                labels.put(PluginConst.PLUGIN_NAME_LABEL_NAME, plugin.getMetadata().getName());
                extensionClient.create(unstructured);
            });
    }
}
