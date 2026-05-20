export type ImageStyle =
  | "Realistic"
  | "Anime"
  | "3D Render"
  | "Watercolor"
  | "Pixel Art"
  | "Oil Painting"
  | "Sketch"
  | "Cinematic"
  | "Pop Art";

export type AspectRatio = "1:1" | "9:16" | "16:9";

export interface GeneratedImage {
  id: string;
  url: string;
  index: number;
}

export interface InspirationPrompt {
  id: string;
  text: string;
}

export interface ImageGeneratorState {
  prompt: string;
  style: ImageStyle;
  aspectRatio: AspectRatio;
  status: "idle" | "generating" | "completed" | "error";
  results: GeneratedImage[];
  selectedImageId: string | null;
  progress: number;
}
