import winston from "winston";


const filter = {
 errorFilter : winston.format((info, opts) => {
    return info.level === 'error' ? info : false;
  }),
  
 infoFilter : winston.format((info, opts) => {
    return info.level === 'info' ? info : false;
  }),
 warnFilter : winston.format((info, opts) => {
    return info.level === 'warn' ? info : false;
  }),
 debugFilter : winston.format((info, opts) => {
    return info.level === 'warn' ? info : false;
  })
}


export default filter