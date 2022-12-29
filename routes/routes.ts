import { Router } from "express";
import {
  getProvincias,
  getProvinciaById,
  createProvincia,
  updateProvincia,
  getProvinciasEnabled,
  getProvinciasByName,
} from "../controllers/Provincia";
import {
  createMunicipio,
  getMunicipioById,
  getMunicipios,
  getMunicipiosByName,
  getMunicipiosByProvincia,
  getMunicipiosEnabled,
  updateMunicipio,
} from "../controllers/Municipio";
import {
  createOrganismo,
  getOrganismoById,
  getOrganismos,
  getOrganismosByName,
  getOrganismosEnabled,
  updateOrganismo,
} from "../controllers/Organismo";
import {
  createEmpresaInstitucion,
  getEmpresaInstitucionById,
  getEmpresasInstituciones,
  getEmpresasInstitucionesByMunByOrg,
  getEmpresasInstitucionesByName,
  getEmpresasInstitucionesEnabled,
  updateEmpresaInstitucion,
} from "../controllers/EmpresaInstitucio";
import {
  createEstado,
  getEstadoById,
  getEstados,
  getEstadosByName,
  getEstadosEnabled,
  updateEstado,
} from "../controllers/Estado";
import {
  getFuncionalidadById,
  getFuncionalidades,
  getFuncionalidadesEnabled,
  getFuncionalidadesByRol,
  updateFuncionalidad,
  createFuncionalidad,
  getFuncionalidadesByName,
} from "../controllers/Funcionalidad";
import {
  createRol,
  getRolsByFuncionalidad,
  getRolById,
  getRols,
  getRolsEnabled,
  updateRol,
  getRolsByName,
} from "../controllers/Rol";
import {
  createUser,
  getUserById,
  getUsers,
  getUsersByEmail,
  getUsersByRol,
  getUsersEnabled,
  loginUser,
  updateUser,
} from "../controllers/User";
import {
  createEntidadRegistro,
  getEntidadesRegistro,
  getEntidadesRegistroById,
  getEntidadesRegistroByMun,
  getEntidadesRegistroByName,
  getEntidadesRegistroEnabled,
  updateEntidadRegistro,
} from "../controllers/EntidadRegistro";
import {
  createFuncionarioRegistro,
  getFuncionarioRegistroById,
  getFuncionariosRegistro,
  getFuncionariosRegistroByER,
  getFuncionariosRegistroByName,
  getFuncionariosRegistroEnabled,
  updateFuncionarioRegistro,
} from "../controllers/FuncionarioRegistro";
import {
  createRepresentante,
  exportPdf,
  getRepresentanteById,
  getRepresentantes,
  getRepresentantesByEmpInst,
  getRepresentantesByName,
  getRepresentantesEnabled,
  updateRepresentante,
} from "../controllers/Representante";
import {
  createTarifa,
  getTarifaById,
  getTarifas,
  getTarifasByFinalidad,
  getTarifasByTime,
  getTarifasEnabled,
  updateTarifa,
} from "../controllers/Tarifa";

import { getPropositos } from "../controllers/Proposito";
import { getFinalidades } from "../controllers/Finalidad";
import {
  getByCi,
  getByEmail,
  getByEnabled,
  getById,
  getByIdById2,
  getByName,
  getByTime,
  getByUserId,
} from "../middlewares/common";
import { postProvincia, putProvincia } from "../middlewares/provincia";
import { postMunicipio, putMunicipio } from "../middlewares/municipio";
import { postTarifa, putTarifa } from "../middlewares/tarifa";
import { postOrganismo, putOrganismo } from "../middlewares/organismo";
import {
  postEmpresaInstitucion,
  putEmpresaInstitucion,
} from "../middlewares/empresaInstitucion";
import { postEstado, putEstado } from "../middlewares/estado";
import {
  postFuncionalidad,
  putFuncionalidad,
} from "../middlewares/funcionalidad";
import { postRol, putRol } from "../middlewares/rol";
import {
  postEntidadRegistro,
  putEntidadRegistro,
} from "../middlewares/entidadRegistro";
import {
  postFuncionarioRegistro,
  putFuncionarioRegistro,
} from "../middlewares/funcionarioRegistro";
import {
  postRepresentante,
  putRepresentante,
} from "../middlewares/representante";

import { keepFile } from "../tools/UploadPdf";
import { postLogin, postUser, putUser } from "../middlewares/user";
import { protectedRoute } from "../middlewares/authenticateToken";
import { postConditions } from "../middlewares/conditions";
import {
  exportPrivateKey,
  generateSolicitud,
  getSolicitudById,
  getSolicitudes,
  getSolicitudesByPropByEst,
  getSolicitudesByPropByEstByEI,
  getSolicitudesByPropByEstByER,
} from "../controllers/Solicitud";

import { getConditions, writeConditions } from "../controllers/terms";

const router = Router();

// Provincia Routes
router.get("/provincias", getProvincias);
router.get("/provincias/:id", getProvinciaById);
router.get( "/provincias/name/:name", getProvinciasByName);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.post("/provincias", createProvincia);
router.put("/provincias/:id", updateProvincia);

// Municipio Routes
router.get("/municipios", getMunicipios);
router.get("/municipios/:id", getMunicipioById);
router.get( "/municipios/name/:name", getMunicipiosByName);
router.get("/municipios/provincia/:id", getMunicipiosByProvincia);
router.get( "/municipios/enabled/:enabled", getMunicipiosEnabled);
router.post("/municipios", createMunicipio);
router.put("/municipios/:id", updateMunicipio);

// Tarifa Routes
router.get("/tarifas", getTarifas);
router.get("/tarifas/:id", getTarifaById);
router.get("/tarifas/time/:time", getTarifasByTime);
router.get("/tarifas/finalidad/:id",protectedRoute, getTarifasByFinalidad);
router.get("/tarifas/enabled/:enabled", getTarifasEnabled );
router.post("/tarifas", createTarifa);
router.put("/tarifas/:id", updateTarifa);

// Organismo Routes
router.get("/organismos", getOrganismos);
router.get("/organismos/:id", getOrganismoById);
router.get("/organismos/name/:name", getOrganismosByName);
router.get("/organismos/enabled/:enabled", getOrganismosEnabled);
router.post("/organismos", createOrganismo);
router.put("/organismos/:id", updateOrganismo);

// EmpresaInstitucion Routes
router.get("/empresas-instituciones/", getEmpresasInstituciones);
router.get("/empresas-instituciones/:id", getEmpresaInstitucionById);
router.get("/empresas-instituciones/name/:name", getEmpresasInstitucionesByName);
router.get("/empresas-instituciones/municipio/:id",getEmpresasInstitucionesByMunByOrg);
router.get("/empresas-instituciones/enabled/:enabled", getEmpresasInstitucionesEnabled);
router.post("/empresas-instituciones", createEmpresaInstitucion);
router.put("/empresas-instituciones/:id", updateEmpresaInstitucion);

// Estado Routes
router.get("/estados", getEstados);
router.get("/estados/:id", getEstadoById);
router.get("/estados/name/:name", getEstadosByName);
router.get("/estados/enabled/:enabled", getEstadosEnabled);
router.post("/estados", createEstado);
router.put("/estados/:id", updateEstado);

// Funcionalidad Routes
router.get("/funcionalidades", getFuncionalidades);
router.get("/funcionalidades/:id", getFuncionalidadById);
router.get("/funcionalidades/name/:name", getFuncionalidadesByName);
router.get("/funcionalidades/enabled/:enabled", getFuncionalidadesEnabled);
router.get("/funcionalidades/rol/:id", getFuncionalidadesByRol);
router.post("/funcionalidades", createFuncionalidad);
router.put("/funcionalidades/:id", updateFuncionalidad);

// Rol Routes
router.get("/rols", getRols);
router.get("/rols/:id", getRolById);
router.get("/rols/name/:name", getRolsByName);
router.get("/rols/enabled/:enabled", getRolsEnabled);
router.get("/rols/funcionalidad/:id", getRolsByFuncionalidad);
router.post("/rols", createRol);
router.put("/rols/:id", updateRol);

// EntidadRegistro Routes
router.get("/entidades-registro/", getEntidadesRegistro);
router.get("/entidades-registro/:id", getEntidadesRegistroById);
router.get("/entidades-registro/name/:name", getEntidadesRegistroByName);
router.get("/entidades-registro/municipio/:id/", getEntidadesRegistroByMun);
router.get("/entidades-registro/enabled/:enabled", getEntidadesRegistroEnabled);
router.post("/entidades-registro", createEntidadRegistro);
router.put( "/entidades-registro/:id", updateEntidadRegistro);

// FuncionarioRegistro Routes
router.get("/funcionarios-registro/", getFuncionariosRegistro);
router.get("/funcionarios-registro/:id", getFuncionarioRegistroById);
router.get("/funcionarios-registro/name/:name", getFuncionariosRegistroByName);
router.get("/funcionarios-registro/entidad-registro/:id/", getFuncionariosRegistroByER);
router.get("/funcionarios-registro/enabled/:enabled", getFuncionariosRegistroEnabled);
router.post("/funcionarios-registro", createFuncionarioRegistro);
router.put("/funcionarios-registro/:id", updateFuncionarioRegistro);

// Representante Routes
router.get("/representantes", getRepresentantes);
router.get("/representantes/:id", getRepresentanteById);
router.get("/representantes/name/:name", getRepresentantesByName);
router.get("/representantes/export/:ci", exportPdf);
router.get("/representantes/empresa-institucion/:id", getRepresentantesByEmpInst);
router.get("/representantes/enabled/:enabled", getRepresentantesEnabled);
router.post("/representantes", createRepresentante);
router.put("/representantes/:id", updateRepresentante);

// Condition Routes
router.get("/condiciones", getConditions);
router.post("/condiciones", writeConditions);

//Proposito Routes
router.get("/propositos", getPropositos);

//Finalidad Routes
router.get("/finalidades", getFinalidades);

// User Routes
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.get("/users/email/:email", getUsersByEmail);
router.get("/users/rol/:id", getUsersByRol);
router.get("/users/enabled/:enabled", getUsersEnabled);
router.post("/users", createUser);
router.post("/login", loginUser);
router.put("/users/:id", updateUser);

// Solicitud Routes
router.get("/solicitudes", getSolicitudes);
router.get("/solicitudes/:id", getSolicitudById);
router.get("/solicitudes/proposito/:id/estado/:id2", getSolicitudesByPropByEst);
router.get("/solicitudes/proposito/:id/estado/:id2/empresa-institucion/:id3", getSolicitudesByPropByEstByEI);
router.get("/solicitudes/proposito/:id/estado/:id2/entidad-registro/:id3", getSolicitudesByPropByEstByER);
router.post("/solicitudes/generacion", generateSolicitud);
router.get("/solicitudes/export/key/:ci", exportPrivateKey);

export default router;
