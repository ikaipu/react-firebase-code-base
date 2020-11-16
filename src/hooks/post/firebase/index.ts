import { PostHooks } from 'hooks/post';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { isPosts } from 'domains/models/post';

// eslint-disable-next-line import/prefer-default-export
export const usePosts: PostHooks['usePosts'] = () => {
  const postRef = useFirestore().collection('posts');
  const posts = useFirestoreCollectionData(postRef, { idField: 'id' });

  if (!isPosts(posts)) {
    throw Error('API type error');
  }

  return { posts };
};
