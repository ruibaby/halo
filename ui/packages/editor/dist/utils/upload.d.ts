import { Attachment } from "@halo-dev/api-client";
import { AxiosRequestConfig } from "axios";
import { Editor, PMNode } from "../tiptap";
export interface FileProps {
  file: File;
  editor: Editor;
}
/**
 * Handles file events, determining if the file is an image and triggering the appropriate upload process.
 *
 * @param {FileProps} { file, editor } - File and editor instances
 * @returns {boolean} - True if a file is handled, otherwise false
 */
export declare const handleFileEvent: ({ file, editor }: FileProps) => boolean;
/**
 * Uploads an image file and inserts it into the editor.
 *
 * @param {FileProps} { file, editor } - File to be uploaded and the editor instance
 */
export declare const uploadImage: ({ file, editor }: FileProps) => void;
/**
 * Uploads a video file and inserts it into the editor.
 *
 * @param {FileProps} { file, editor } - File to be uploaded and the editor instance
 */
export declare const uploadVideo: ({ file, editor }: FileProps) => void;
/**
 * Uploads an audio file and inserts it into the editor.
 *
 * @param {FileProps} { file, editor } - File to be uploaded and the editor instance
 */
export declare const uploadAudio: ({ file, editor }: FileProps) => void;
export interface UploadFetchResponse {
  controller: AbortController;
  onUploadProgress: (progress: number) => void;
  onFinish: (attachment?: Attachment) => void;
  onError: (error: Error) => void;
}
/**
 * Uploads a file with progress monitoring, cancellation support, and callbacks for completion and errors.
 *
 * @param {File} file - File to be uploaded
 * @param {Function} upload - Function to handle the file upload, should return a Promise
 * @returns {Promise<UploadFetchResponse>} - Returns an object with control and callback methods
 */
export declare const uploadFile: (
  file: File,
  upload: (file: File, options?: AxiosRequestConfig) => Promise<Attachment>,
  uploadResponse: UploadFetchResponse
) => Promise<void>;
/**
 * Converts a file to a Base64 string.
 *
 * @param {File} file - File to be converted
 * @returns {Promise<string>} - A promise that resolves with the Base64 string
 */
export declare function fileToBase64(file: File): Promise<string>;
export declare function containsFileClipboardIdentifier(
  types: readonly string[]
): boolean;
export declare function batchUploadExternalLink(
  editor: Editor,
  nodes: {
    node: PMNode;
    pos: number;
    index: number;
    parent: PMNode | null;
  }[]
): Promise<void>;
export declare function uploadExternalLink(
  editor: Editor,
  nodeWithPos: {
    node: PMNode;
    pos: number;
    index: number;
    parent: PMNode | null;
  }
): Promise<void>;
export declare function isExternalAsset(src: string): boolean;
