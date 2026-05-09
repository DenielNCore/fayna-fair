export const useDbStore = defineStore('db', () => {
  const { $pb } = useNuxtApp();

  const createUser = async (user: UserI) => {
    return $pb.collection('users').create(user);
  };

  return {
    createUser,
  };
});
