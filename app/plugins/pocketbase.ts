import type { RecordService } from 'pocketbase';
import PocketBase from 'pocketbase';

interface TypedPocketBase extends PocketBase {
  collection(idOrName: string): RecordService;
  collection(idOrName: 'users'): RecordService<UserI>;
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const pb = new PocketBase(nuxtApp.$config.public.DB_URL) as TypedPocketBase;
  if (process.env.NODE_ENV === 'development') console.log(pb);
  // const cookie = useCookie('pb_auth', {
  //   path: '/',
  //   secure: true,
  //   sameSite: 'none',
  //   // sameSite: 'strict',
  //   httpOnly: false, // change to "true" if you want only server-side access
  //   maxAge: 1209600,
  // });

  // cookie.value = cookie.value || { token: null, model: null };
  // console.log('cookie', cookie.value);

  // load the store data from the cookie value
  // pb.authStore.save(cookie.value?.token, cookie.value?.model);

  // send back the default 'pb_auth' cookie to the client with the latest store state
  pb.authStore.onChange(() => {
    // console.log('onChange');
    // cookie.value = structuredClone(pb.authStore);
    // cookie.value = structuredClone(pb.authStore);
    // cookie.value = {
    //   token: pb.authStore.token,
    //   model: pb.authStore.model,
    // };
  });

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    if (pb.authStore.isValid) {
      await pb.collection('users').authRefresh();
    }
    else {
      pb.collection('users').unsubscribe();

      pb.authStore.clear();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (_) {
    // clear the auth store on failed refresh
    pb.collection('users').unsubscribe();

    pb.authStore.clear();
  }

  // const r = pb.collection('users').authWithPassword('test@test.com', '12345678');
  // r.then((res) => {
  //   console.log('RES', res);
  // }).catch((err) => {
  //   console.log('err', err);
  // });
  return {
    provide: { pb },
  };
});
