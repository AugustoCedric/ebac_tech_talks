AOS.init();

const dataDoEvento = new Date("Mar 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distaciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor((distaciaAteOEvento % diasEmMs) / horaEmMs);
  const minutosAteOEvento =
    Math.floor((distaciaAteOEvento % horaEmMs) / minutoEmMs);
  const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutoEmMs) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distaciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Evendo expirado";
  }
}, 1000);
