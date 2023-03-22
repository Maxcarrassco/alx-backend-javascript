import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    let photo = await uploadPhoto();
    let user = await createUser();
    photo = await photo.json();
    user = await user.json();
    return { photo, user };
  } catch (_) {
    return {
      photo: null,
      user: null,
    };
  }
}
