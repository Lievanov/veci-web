export const routes = {
  getRoutesByFilter: async (client, filter) => {
    try {
      const { data } = await client
        .from(ROUTES_TABLE)
        .select("*")
        .eq("filter", filter)
        .order('order', { ascending: true })
      
        if(data) return data
        return []
      } catch (error) {
        console.error(error)
        return []
      }
  }
}