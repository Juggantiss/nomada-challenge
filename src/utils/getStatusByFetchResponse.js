const STATUS_MESSAGES = {
  success: (name) => ({
    text: "Listo",
    details: {
      text: "Listo",
      color: "#4ADE80",
      name
    }
  }),
  notFound: {
    text: "No se encontrĂ³",
    details: {
      text: "No se encontrĂ³",
      color: "#FDE047",
      colorText: "#0F172A"
    }
  },
  error: {
    text: "Hubo un error",
    details: {
      text: "Error de red o de servidor",
      color: "#F75555"
    }
  }
};

export const getStatusByFetchResponse = (fetchResponse, name = null) => {
  if (STATUS_MESSAGES[fetchResponse]) {
    if (Boolean(name)) {
      return STATUS_MESSAGES[fetchResponse](name);
    }
    return STATUS_MESSAGES[fetchResponse];
  }
  return null;
};
