import fs from "fs";
import forge from "node-forge";
import { KeyProps } from "../controllers/Solicitud";

const createKeyFile = (key: string, ci: number, type: string) => {
  fs.appendFile(`data/keys/${ci}.${type}`, key, (err) => {
    if (err) throw err;
  });
};


export const generateKey = (secret: KeyProps, ci: number) => {
  // generate a key pair
  var keys = forge.pki.rsa.generateKeyPair(2048);

  // create a certification request (CSR)
  var csr = forge.pki.createCertificationRequest();
  csr.publicKey = keys.publicKey;
  csr.setSubject([
    {
      name: "commonName",
      value: "Gilberto Alejandro Acosta Soto",
    },
    {
      name: "countryName",
      value: "CU",
    },
    {
      shortName: "ST",
      value: "Matanzas",
    },
    {
      name: "localityName",
      value: "Santa Marta",
    },
    {
      name: "organizationName",
      value: "Segurmatica",
    },
    {
      shortName: "OU",
      value: "SG",
    },
  ]);

  // sign certification request
  csr.sign(keys.privateKey);

  // verify certification request
  //var verified = csr.verify();

  // convert certification request to PEM-format
  const certificate = forge.pki.certificationRequestToPem(csr);

  //create private key
  const privateKeyRsa = forge.pki.privateKeyToPem(keys.privateKey);

  //export .csr and .pem
  createKeyFile(certificate, ci, "csr");
  createKeyFile(privateKeyRsa, ci, "pem");

  // convert a Forge certification request from PEM-format
  //var csr = forge.pki.certificationRequestFromPem(pem);

  // get an attribute
  //csr.getAttribute({name: 'challengePassword'});

  // get extensions array
  //csr.getAttribute({name: 'extensionRequest'}).extensions;

  //let pem = csr.privateKey;

  console.log(certificate);
  console.log(privateKeyRsa);

  return { csr: certificate };
};

