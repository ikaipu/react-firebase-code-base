import { CreatePostParams, PostHooks } from 'hooks/post';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { isPosts } from 'domains/models/post';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  orderBy,
  query,
  serverTimestamp,
} from '@firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export const usePosts: PostHooks['usePosts'] = () => {
  const postsCollection = collection(useFirestore(), 'posts');
  const postsQuery = query(postsCollection, orderBy('createdAt', 'desc'));

  const { data: posts } = useFirestoreCollectionData(postsQuery, {
    idField: 'id',
  });

  if (!isPosts(posts)) {
    console.log(posts);
    throw Error('API type error: Posts');
  }

  return { posts };
};

export const usePostAction: PostHooks['usePostAction'] = () => {
  const f: Firestore = useFirestore();

  const createPost = async (params: CreatePostParams) => {
    const postsCollection = collection(f, 'posts');
    const userRef = doc(f, 'users', params.userId);

    const { userId: _, ...paramsWithoutUserId } = params;
    await addDoc(postsCollection, {
      ...paramsWithoutUserId,
      postNum: 0,
      viewedNum: 0,
      userRef,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  return { createPost };
};
