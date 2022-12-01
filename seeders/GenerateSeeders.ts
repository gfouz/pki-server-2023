import db from "../models";
import { empresasInstituciones } from "./empresasInstituciones";
import { estados } from "./estados";
import { funcionalidades } from "./funcionalidades";
import { municipios } from "./municipios";
import { propositos } from "./propositos";
import { provincias } from "./provincias";
import { rols } from "./rols";
import { rolsfuncionalidades } from "./rolsfuncionalidades";
import { organismos } from "./organismos";
import { entidadesRegistro } from "./entidadesRegistro";
import { finalidades } from "./finalidades";
import { tarifas } from "./tarifas";
import { funcionariosRegistro } from "./funcionariosRegistro";
import { representantes } from "./representantes";


const brcypt = require("bcrypt");

export const generateSeeders = () => {
  createPropositos();
  createProvincias();
  createMunicipios();
  createOrganismos();
  createEmpresasInstituciones();
  createEstados();
  createRols();
  createFuncionalidades();
  //createRolsFuncionalidades();
  createUsers();
  //createEntidadesRegistro();
  //createFinalidades();
  //createTarifas();
  //createFuncionariosRegistro();
  //createRepresentantes();
};

const createPropositos = async () => {
  const { count } = await db.Propositos.findAndCountAll();
  if (count == 0) {
    propositos.map(async (proposito: object) => {
      await db.Propositos.create(proposito);
    });
  }
};

const createProvincias = async () => {
  const { count } = await db.Provincias.findAndCountAll();
  if (count == 0) {
    provincias.map(async (provincia: object) => {
      await db.Provincias.create(provincia);
    });
  }
};

const createMunicipios = async () => {
  const { count } = await db.Municipios.findAndCountAll();
  if (count == 0) {
    municipios.map((municipio: object) => {
      db.Municipios.create(municipio);
    });
  }
};

const createOrganismos = async () => {
  const { count } = await db.Organismos.findAndCountAll();
  if (count == 0) {
    organismos.map((organismo: object) => {
      db.Organismos.create(organismo);
    });
  }
};

const createEmpresasInstituciones = async () => {
  const { count } = await db.EmpresasInstituciones.findAndCountAll();
  if (count == 0) {
    empresasInstituciones.map((empresaInstitucion: object) => {
      db.EmpresasInstituciones.create(empresaInstitucion);
    });
  }
};

const createEstados = async () => {
  const { count } = await db.Estados.findAndCountAll();
  if (count == 0) {
    estados.map((estado: object) => {
      db.Estados.create(estado);
    });
  }
};

const createRols = async () => {
  const { count } = await db.Rols.findAndCountAll();
  console.log(`Response: ${count}`);
  if (count == 0) {
    rols.map((rol: object) => {
      db.Rols.create(rol);
    });
  }
};

const createFuncionalidades = async () => {
  const { count } = await db.Funcionalidades.findAndCountAll();
  if (count == 0) {
    funcionalidades.map((funcionalidad: object) => {
      db.Funcionalidades.create(funcionalidad);
    });
  }
};

const createRolsFuncionalidades = async () => {
  const { count } = await db.RolsFuncionalidades.findAndCountAll();
  if (count == 0) {
    rolsfuncionalidades.map((rolfuncionalidad: object) => {
      db.RolsFuncionalidades.create(rolfuncionalidad);
    });
  }
};

const createEntidadesRegistro = async () => {
  const { count } = await db.EntidadesRegistro.findAndCountAll();
  if (count == 0) {
    entidadesRegistro.map((entidadRegistro: object) => {
      db.EntidadesRegistro.create(entidadRegistro);
    });
  }
};

const createFinalidades = async () => {
  const { count } = await db.Finalidades.findAndCountAll();
  if (count == 0) {
    finalidades.map((finalidad: object) => {
      db.Finalidades.create(finalidad);
    });
  }
};

const createTarifas = async () => {
  const { count } = await db.Tarifas.findAndCountAll();
  if (count == 0) {
    tarifas.map((tarifa: object) => {
      db.Tarifas.create(tarifa);
    });
  }
};

const createUsers = async () => {
  const { count } = await db.Users.findAndCountAll({
    where: {
      rolId: 3,
    },
  });
  if (count == 0) {
    db.Users.create({
      email: "gilbealejandro1996@gmail.com",
      password: await brcypt.hash("administrador96", 10),
      enabled: true,
      rolId: 3,
    });
    const user = await db.Users.findOne({
      where: {
        email: "gilbealejandro1996@gmail.com",
      },
    });
  }
};


const createFuncionariosRegistro = async () => {
  const { count } = await db.FuncionariosRegistro.findAndCountAll();
  if (count == 0) {
    funcionariosRegistro.map((funcionario: object) => {
      db.FuncionariosRegistro.create(funcionario);
    });
  }
};

const createRepresentantes = async () => {
  const { count } = await db.Representantes.findAndCountAll();
  if (count == 0) {
       representantes.map((representante: object) => {
      db.Representantes.create(representante);
    });
  }
};




