import axios from "axios";

const BASE_URL = "https://apiintegrador-production-8ef8.up.railway.app/api";

const handleError = (error) => {
  throw new Error("Error al conectar con la API: " + error.message);
};

// Funcion generadora para evitar repetir codigo
const createApiMethods = (endpoint) => ({
  getAll: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${endpoint}/all`);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  getById: async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/${endpoint}`, data);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, data) => {
    try {
      const res = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  remove: async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },
});

// Generar todas las rutas de la API
export const productosAPI = createApiMethods("productos");
export const familiasAPI = createApiMethods("familias");
export const alberguesAPI = createApiMethods("albergues");
export const municipalidadAPI = createApiMethods("municipalidad");
export const capacidadAlberguesAPI = createApiMethods("capacidadAlbergues");
export const ubicacionesAPI = createApiMethods("ubicaciones");
export const condicionesEspecialesAPI = createApiMethods("condicionesEspeciales");
// export const referenciasAPI = createApiMethods("referencias");
export const personasAPI = createApiMethods("personas");
export const condicionesSaludAPI = createApiMethods("condicionesSalud");
export const recursosAsignadosAPI = createApiMethods("recursosAsignados");
export const caracteristicasPoblacionalesAPI = createApiMethods("caracteristicasPoblacionales");
export const firmasDigitalesAPI = createApiMethods("firmasDigitales");
export const infraestructuraAlberguesAPI = createApiMethods("infraestructuraAlbergues");
export const amenazasAPI = createApiMethods("amenazas");

