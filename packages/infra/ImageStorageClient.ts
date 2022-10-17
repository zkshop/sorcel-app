import { StorageClient } from 'domains';
import crypto from 'crypto';
import { supabase } from 'supabase';
import { getObjectPathFromImageUrl } from 'pure';

export function ImageStorageClient(): StorageClient {
  return {
    uploadPicture: async (image) => {
      const filename = crypto.randomUUID();
      const { error } = await supabase.storage.from('products').upload(filename, image, {
        contentType: 'image/jpeg',
      });

      if (error) {
        throw new Error(error.message);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from('products').getPublicUrl(filename);

      return publicUrl;
    },

    deletePicture: async (imageUrl) => {
      const { error } = await supabase.storage.from('products').remove([imageUrl]);

      if (error) {
        throw new Error(error.message);
      }

      return;
    },

    updatePicture: async (image, imagePath) => {
      const resourceId = getObjectPathFromImageUrl(imagePath);

      if (!resourceId) {
        throw new Error('Resource path not found.');
      }

      const { error } = await supabase.storage.from('products').update(resourceId, image, {
        upsert: true,
        contentType: 'image/jpeg',
      });

      if (error) {
        throw new Error(error.message);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from('products').getPublicUrl(resourceId);

      return publicUrl;
    },
  };
}
