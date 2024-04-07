import bcrypt from "bcrypt";

export const hash = (pass) => {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) => {
    if (err) throw err;

    pass = hash;
  });
};
