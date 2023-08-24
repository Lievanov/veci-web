<template>
  <div>
    <p>Registrate en tu Veci</p>

    <div>
      <div></div>
      <div>
        <article v-show="hasSuccessRegistration">
          <div>
            <p>Gracias por registrarte!</p>
          </div>
          <div>
            Revisa tu correo electronico y verifica tu cuenta de correo para
            avanzar en el proceso de inscripcion de Move. Si no encuentras el
            correo, revisa la bandeja de spam!
          </div>
        </article>
        <form @submit.prevent="submit">
          <div>
            <label>Email</label>
            <div>
              <input
                v-model="username"
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
                type="password"
                placeholder="********"
              />
            </div>
          </div>

          <button type="submit" :disabled="hasSuccessRegistration">
            Iniciar Sesion
          </button>
        </form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const username = ref('');
const password = ref('');
const hasSuccessRegistration = ref(false);

onMounted(() => {
  if (user.id) router.push('/dashboard');
});

const submit = async () => {
  const { data, error } = await client.auth.signUp({
    email: username.value,
    password: password.value,
  });
  if (error) {
    console.error(error);
    return alert(error);
  }
  if (data.user.id) {
    hasSuccessRegistration.value = true;
  }
};
</script>
