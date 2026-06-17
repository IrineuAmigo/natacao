import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const modalidades = [
  {
    nome: "Livre (Crawl)",
    imagem: require("../../assets/images/modalidades/livre.png"),
    descricao:
      "Os atletas nadam o estilo crawl, podendo a prova ser de 50m, 100m, 200m, 400m, 800m, 1500m, ou de revezamento (4x100m ou 4x200m), além da maratona aquática. Não é permitido nadar por baixo d’água, ou seja, uma parte do corpo deve estar sempre do lado de fora.",
  },
  {
    nome: "Costas",
    imagem: require("../../assets/images/modalidades/costas.png"),
    descricao:
      "Único estilo em que os nadadores largam já dentro d’água, segurando o cabo da baliza. O corpo só pode estar totalmente submerso nos 15m após as viradas e a largada. Há provas de 100m e de 200m.",
  },
  {
    nome: "Peito",
    imagem: require("../../assets/images/modalidades/peito.png"),
    descricao:
      "Estilo mais lento, precisa ser realizado com o movimento simultâneo das pernas e dos braços na horizontal. No momento da virada ou do toque na borda, o atleta precisa bater as duas mãos na parede. Há provas de 100m e de 200m.",
  },
  {
    nome: "Borboleta",
    imagem: require("../../assets/images/modalidades/borboleta.png"),
    descricao:
      "Com os ombros alinhados à superfície da água, o nadador faz o movimento simultâneo dos braços. As pernas alinhadas também vão para cima e para baixo simultaneamente. Também é preciso bater as duas mãos ao mesmo tempo na parede. Há provas de 100m e de 200m.",
  },
  {
    nome: "Medley",
    imagem: require("../../assets/images/modalidades/medley.png"),
    descricao:
      "Reúne os quatro estilos em uma única competição. Pode ser de 200m (50m de cada estilo) ou de 400m (100m de cada estilo), além do revezamento 4x100m.",
  },
];

export default function Modalidades() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Modalidades de Natação</Text>

      {modalidades.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.imagem} style={styles.imagem} />

          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 10,
  },

  titulo: {
    color: "#3dff87ff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },

  card: {
    backgroundColor: "#353c45",
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
  },

  imagem: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },

  nome: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  descricao: {
    color: "#ddd",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 8,
  },
});
