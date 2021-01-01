import { CreatePostParams, PostHooks } from 'hooks/post';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { isPosts } from 'domains/models/post';
import { firestore as f } from 'firebase';

// eslint-disable-next-line import/prefer-default-export
export const usePosts: PostHooks['usePosts'] = () => {
  const postsRef = useFirestore()
    .collection('posts')
    .orderBy('createdAt', 'desc');
  const collectionData = useFirestoreCollectionData(postsRef, {
    idField: 'id',
  });

  const posts = collectionData.map((docData) => {
    const createdAt = docData?.createdAt as f.Timestamp;
    const updatedAt = docData?.updatedAt as f.Timestamp;
    const userRef = docData?.userRef as f.DocumentReference;

    const post = {
      ...docData,
      userId: userRef.id,
      createdAt: createdAt === null ? null : createdAt.toDate(),
      updatedAt: updatedAt === null ? null : updatedAt.toDate(),
    };

    return post;
  });

  if (!isPosts(posts)) {
    console.log(posts);
    throw Error('API type error: Posts');
  }

  return { posts };
};

export const usePostAction: PostHooks['usePostAction'] = () => {
  const firestore = useFirestore();
  const fieldValue = useFirestore.FieldValue;

  const createPost = async (params: CreatePostParams) => {
    const postRef = firestore.collection(`posts`);
    const userRef = firestore.collection('users').doc(params.userId);
    const { userId: _, ...paramsWithoutUserId } = params;

    await postRef.add({
      ...paramsWithoutUserId,
      postNum: 0,
      viewedNum: 0,
      userRef,
      createdAt: fieldValue.serverTimestamp(),
      updatedAt: fieldValue.serverTimestamp(),
    });
  };

  return { createPost };
};
