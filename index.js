var energia = 100;
var velocidade;

if ((energia > 80) && (energia <= 100)){
    document.write("Energia alta!");
    velocidade=100;
} else if((energia > 60 && (energia < 61))) {
    document.write("Energia boa");
    velocidade=80;
} else if((energia > 40) && (energia < 61)){
    document.write("Energia média");
    velocidade=60;

}  else if((energia > 20) && (energia < 41)){
    document.write("Energia baixa");
    velocidade=40;
 }
  else if((energia > 1) && (energia < 21)){
    document.write("Energia crítica");
    velocidade=20;
 }
  else {
    document.write("Jogador morto");
    
 }