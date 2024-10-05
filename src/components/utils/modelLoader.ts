// utils/modelLoader.ts
import * as tf from '@tensorflow/tfjs';

export const loadModel = async (modelPath: string) => {
  try {
    const model = await tf.loadLayersModel(modelPath);
    return model;
  } catch (error) {
    console.error("Error loading model:", error);
    throw error;
  }
};
