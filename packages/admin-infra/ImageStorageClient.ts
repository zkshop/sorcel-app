import type { StorageClient } from '@3shop/domains';
import uuid from 'uuid';
import { supabase } from '@3shop/supabase';
import { getObjectPathFromImageUrl } from '@3shop/pure';

export function ImageStorageClient(): StorageClient {
  return {
    uploadPicture: async (image, bucketName) => {
      const filename = uuid.v4();
      const { error } = await supabase.storage.from(bucketName).upload(filename, image);

      if (error) {
        throw new Error(error.message);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucketName).getPublicUrl(filename);

      return publicUrl;
    },

    deletePicture: async (imageUrl, bucketName) => {
      const { error } = await supabase.storage.from(bucketName).remove([imageUrl]);

      if (error) {
        throw new Error(error.message);
      }

      return;
    },

    updatePicture: async (image, imagePath, bucketName) => {
      const resourceId = getObjectPathFromImageUrl(imagePath);

      if (!resourceId) {
        throw new Error('Resource path not found.');
      }

      if (!bucketName) {
        throw new Error('No Bucket Name specified.');
      }

      const { error } = await supabase.storage.from(bucketName).update(resourceId, image, {
        upsert: true,
        contentType: 'image/jpeg',
      });

      if (error) {
        throw new Error(error.message);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucketName).getPublicUrl(resourceId);

      return publicUrl;
    },
  };
}
