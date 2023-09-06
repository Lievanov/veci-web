export const profiles = {
  createProfile: async (client, uid) => {
    try {
      const { data } = await client
        .from(PROFILES_TABLE)
        .insert({
          uid
        })
        .select()
      if(data) return true;
      return false
    } catch (error) {
      console.error(error)
      return false
    }
  }
}