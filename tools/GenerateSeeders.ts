import db from "../models";
import { empresasInstituciones } from "../seeders/empresasInstituciones";
import { estados } from "../seeders/estados";
import { funcionalidades } from "../seeders/funcionalidades";
import { municipios } from "../seeders/municipios";
import { propositos } from "../seeders/propositos";
import { provincias } from "../seeders/provincias";
import { rols } from "../seeders/rols";
import { users } from "../seeders/users";
import { organismos } from "../seeders/organismos";
import { entidadesRegistro } from "../seeders/entidadesRegistro";
import { finalidades } from "../seeders/finalidades";
import { tarifas } from "../seeders/tarifas";
import { funcionariosRegistro } from "../seeders/funcionariosRegistro";
import { representantes } from "../seeders/representantes";
//import { rolsfuncionalidades } from "../seeders/rolsfuncionalidades";


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
  createUsers();
  createEntidadesRegistro();
  createFinalidades();
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
  if (count == 0) await db.Provincias.bulkCreate(provincias);
  
};

const createMunicipios = async () => {
  const { count } = await db.Municipios.findAndCountAll();
  if (count == 0) {
    await db.Municipios.bulkCreate(municipios).then(() => {
        console.log('notes created');
    }).catch((err: any) => {
        console.log('failed to create notes');
        console.log(err);
    })
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

/*const createRolsFuncionalidades = async () => {
  const { count } = await db.RolsFuncionalidades.findAndCountAll();
  if (count == 0) {
    rolsfuncionalidades.map((rolfuncionalidad: object) => {
      db.RolsFuncionalidades.create(rolfuncionalidad);
    });
  }
};*/

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
  const { count } = await db.Users.findAndCountAll();
  if (count == 0) {
    users.map((user: object) => {
      db.Rols.create(user);
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



/*const createUsers = async () => {
  const { count } = await db.Users.findAndCountAll({
    where: {
      RolId: 3,
    },
  });
  if (count == 0) {
    db.Users.create({
      name: "Gilberto Acosta",
      email: "gilbealejandro1996@gmail.com",
      password: await brcypt.hash("administrador96", 10),
      enabled: true,
      rolId: 3,
    });
    
  }
};*/
