import { fromEvent, map, tap } from "rxjs";
const PORCENTAJE = 100;
const parrafo = document.createElement('div');
parrafo.innerHTML = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eros nunc, auctor sodales vulputate rutrum, commodo eu purus. Cras gravida lorem at arcu blandit pulvinar. Sed egestas eget nisl nec egestas. Aliquam erat volutpat. Donec porttitor metus nisi, suscipit eleifend mauris placerat non. Integer viverra id massa vitae posuere. Vestibulum tincidunt ipsum ac lectus molestie egestas. Donec porta dapibus nisi sodales convallis. Nullam tristique iaculis nisi, et vehicula purus varius ac. Vivamus auctor condimentum justo, id feugiat libero sollicitudin ut. Ut volutpat lectus sit amet porta commodo. Etiam vel sapien volutpat, bibendum sapien eget, varius eros. Duis enim quam, cursus ut maximus nec, elementum in quam. Fusce eu blandit libero, vel fermentum nulla. Fusce et gravida lacus. Aenean quis lorem velit.
  <br/><br/>
Nunc rhoncus, eros ac luctus commodo, orci quam ornare leo, fringilla elementum dolor orci quis eros. Nullam vitae urna a velit porttitor rutrum in ullamcorper ex. Pellentesque pellentesque pharetra eros ornare tristique. Aliquam hendrerit scelerisque lorem eu lobortis. Aliquam eu porta est. Donec sodales sed orci fringilla condimentum. Sed faucibus congue sodales.
<br/><br/>
Nullam molestie ante ut dolor commodo lobortis. Nulla at tellus est. Ut dapibus enim orci, a facilisis metus egestas a. Suspendisse ac ante ut erat pellentesque dapibus varius eleifend nunc. Nam risus ex, tristique ultrices efficitur rhoncus, tincidunt pulvinar orci. Suspendisse sagittis posuere lectus, vitae interdum leo. Suspendisse eget turpis sed justo dictum tincidunt vitae non velit.
<br/><br/>
Praesent ante nulla, aliquet eu orci at, elementum rutrum metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi et nunc eget libero vulputate posuere. Nunc feugiat massa id tellus tincidunt tristique. Curabitur sed facilisis lorem. Phasellus porta posuere erat, pulvinar pharetra turpis. Etiam rhoncus faucibus arcu, at suscipit neque ultrices ut. Aliquam tempor interdum libero, quis volutpat dolor fringilla at.
<br/><br/>
Vivamus dolor tellus, scelerisque eu libero ac, tristique tempus purus. In consectetur tortor sed enim auctor varius. Aenean ultrices leo massa, a mollis mi tempus nec. Etiam id auctor augue. Nullam est felis, porta non placerat vel, tincidunt et orci. Maecenas sed sodales sem. Pellentesque libero leo, scelerisque non justo vel, viverra eleifend sapien. Fusce eu tincidunt urna, bibendum tempor nunc. In gravida euismod magna id maximus. Maecenas condimentum, est ac convallis lobortis, eros risus volutpat nisl, et sollicitudin orci risus nec nisi.
<br/><br/>
Curabitur nulla elit, laoreet vel molestie sed, tristique ut enim. Morbi venenatis elit rutrum diam sagittis, eleifend facilisis urna hendrerit. Nulla facilisi. Proin sed purus a lectus aliquet placerat ac in metus. Duis lobortis eros vitae rhoncus lacinia. Sed massa nulla, convallis in maximus vel, lobortis sed odio. Nulla sit amet elit mauris. Vivamus et facilisis ligula. Nulla maximus consectetur ligula at venenatis. Nulla a porttitor magna, in mollis ipsum. Cras erat ligula, congue eget turpis ac, luctus interdum urna. Praesent lobortis aliquet nunc, malesuada congue sem pulvinar sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sem nunc, fringilla quis eros eu, dignissim viverra purus. Vivamus feugiat vitae lacus et pellentesque.
<br/><br/>
Donec eget lorem vel sapien auctor tempus nec sed lacus. Praesent aliquet semper sagittis. Proin turpis lorem, vehicula eu volutpat sed, posuere quis est. Mauris rhoncus fringilla tempor. Vestibulum purus felis, posuere a mi a, condimentum sollicitudin nisi. Mauris vestibulum finibus interdum. Donec vitae commodo arcu, nec pharetra neque. Integer sodales lorem sed lorem sagittis accumsan. Nulla lacinia, felis non mattis dignissim, orci justo congue massa, sit amet viverra magna nunc auctor leo.
<br/><br/>
Curabitur ac pulvinar neque. Phasellus eget nunc metus. Proin sit amet egestas ex. Mauris accumsan, sapien eget rhoncus tincidunt, neque risus molestie velit, vitae vulputate odio risus quis lectus. Pellentesque eu erat diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer bibendum elementum rutrum. Fusce aliquam tortor est, in semper massa scelerisque hendrerit. Suspendisse potenti. Donec egestas ornare risus id tempus. Sed vel ligula metus. Nulla facilisi. Donec iaculis vel odio non luctus. Morbi feugiat vitae libero eget aliquam.
<br/><br/>
Nulla at auctor urna, sit amet tempus libero. Nullam volutpat tortor eget ex dictum, nec lacinia nisl pellentesque. Mauris varius magna diam, vel facilisis leo tempus lacinia. In auctor est eget lectus tincidunt, at pulvinar nunc dignissim. Vivamus nibh eros, porta non luctus nec, vestibulum gravida tortor. In sit amet suscipit massa, in venenatis leo. Morbi rhoncus gravida euismod. Duis pellentesque dui ut elit interdum, id porttitor lectus volutpat. Vestibulum vel tincidunt neque, et commodo sem. Donec sed turpis volutpat, suscipit risus nec, imperdiet arcu. Phasellus felis leo, volutpat sed velit nec, molestie convallis quam. Donec accumsan tortor ut felis porttitor molestie. Donec dignissim ligula a libero euismod, pellentesque maximus turpis finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Etiam rutrum viverra turpis nec molestie. Fusce auctor elementum lacus at finibus. Cras aliquet eget ante in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta eleifend elit eu consectetur. Nulla gravida ligula ornare purus tempor, facilisis auctor lectus suscipit. Aliquam elementum, risus quis congue scelerisque, risus tortor molestie neque, euismod euismod sapien quam nec massa. Duis malesuada non velit eu lobortis. Proin eu commodo orci, eget dictum mi. Cras felis leo, varius quis nisl vitae, congue ultrices urna. Nulla imperdiet dolor ac arcu dignissim, at pellentesque diam posuere. In tempor mi pulvinar lacus consequat viverra a id enim. Praesent facilisis augue sit amet porttitor eleifend.
`;
const body = document.querySelector('body');
body.append(parrafo);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  // console.log({ scrollTop, scrollHeight, clientHeight })
  return (scrollTop / (scrollHeight - clientHeight)) * PORCENTAJE;
}
const progress$ = fromEvent(document, 'scroll');
progress$.pipe(
  // map((event) => calcularPorcentajeScroll(event)),
  map(calcularPorcentajeScroll),
  tap(x => console.log('Porcentaje despues del calculo: ', x)),
)
  .subscribe((porcentaje) => {
    progressBar.style.width = `${porcentaje}%`;
  });
