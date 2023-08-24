<template>
  <div>
    <p>Bienvenido al Veci</p>
    <form @submit.prevent="submit">
      <div>
        <label>Email</label>
        <div>
          <input
            v-model="username"
            class="input"
            type="email"
            placeholder="tu-correo@email.com"
          />
        </div>
      </div>

      <div>
        <label>Contraseña</label>
        <div>
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="********"
          />
        </div>
      </div>
      <br />

      <button type="submit">Iniciar Sesion</button>
    </form>
  </div>
</template>

<script setup>
// import { DASHBOARDMEMBERURL } from '../composables/constants';

const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const showBanner = ref(false);
const username = ref('');
const password = ref('');

onMounted(() => {
  if (user.id) router.push('/dashboard');
});

const submit = async () => {
  showBanner.value = false;
  const { data, error } = await client.auth.signInWithPassword({
    email: username.value,
    password: password.value,
  });
  if (error) {
    showBanner.value = true;
    return;
  }
  router.push('/dashboard');
  // router.push(DASHBOARDMEMBERURL);
};
</script>
