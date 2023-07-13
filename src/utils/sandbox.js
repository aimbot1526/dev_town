exports.execute = (code) => {
    return new Promise((resolve, reject) => {
      try {
        const result = eval(code);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };
  