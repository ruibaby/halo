package run.halo.app.cache;

import static io.swagger.v3.oas.annotations.enums.ParameterIn.PATH;
import static org.springdoc.core.fn.builders.parameter.Builder.parameterBuilder;
import static org.springframework.http.HttpStatus.NO_CONTENT;

import org.springdoc.core.fn.builders.apiresponse.Builder;
import org.springdoc.webflux.core.fn.SpringdocRouteBuilder;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import run.halo.app.core.extension.endpoint.CustomEndpoint;

@Component
public class CacheEndpoint implements CustomEndpoint {

    private final CacheManager cacheManager;

    public CacheEndpoint(CacheManager cacheManager) {
        this.cacheManager = cacheManager;
    }

    @Override
    public RouterFunction<ServerResponse> endpoint() {
        return SpringdocRouteBuilder
            .route()
            .POST("/caches/{name}/invalidation", request -> {
                var cacheName = request.pathVariable("name");
                if (cacheManager.getCacheNames().contains(cacheName)) {
                    var cache = cacheManager.getCache(cacheName);
                    if (cache != null) {
                        cache.invalidate();
                    }
                }
                return ServerResponse.noContent().build();
            }, builder -> builder
                .tag("v1alpha1/Cache")
                .operationId("InvalidCache")
                .description("Invalidate a cache.")
                .parameter(parameterBuilder()
                    .name("name")
                    .in(PATH)
                    .required(true)
                    .description("Cache name"))
                .response(Builder.responseBuilder()
                    .responseCode(String.valueOf(NO_CONTENT.value())))
                .build())
            .build();
    }

}
