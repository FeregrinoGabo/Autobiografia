import { View, Text, StyleSheet } from 'react-native';

const TextComponent = () => {
  return (
    <View style={styles.container}>
        <View style={styles.contenedor}>
            <Text style={styles.titulos}>Datos</Text>
            <Text style={styles.text}>Gabriel Feregrino Hernández</Text>
            <Text style={styles.text}>Ocupación: Estudiante</Text>
            <Text style={styles.text}>Edad: 20 años</Text>
            <Text style={styles.text}>Fecha de nacimiento: 31/May/2003</Text>
            <Text style={styles.text}>Estado civil: Soltero</Text>
            <Text style={styles.text}>Grado de estudios: Licenciatura en proceso</Text>
            <Text style={styles.text}>Lugar de nacimiento: Santiago de Querétaro, Querétaro</Text>
        </View>



      <Text style={styles.titulos}>Vida mía</Text>
      
      <Text style={styles.text2}>
        Soy tan solo un instante en el transcurso de vida de toda la existencia, es más
        mi propia vivencia es insignificante. Nací sin un solo objetivo en la vida. En el todo soy nada y para la nada,
        soy la nada misma.
      </Text>

      <Text style={styles.titulos}>Historia</Text>

      <Text style={styles.text2}>
        En las misteriosas tierras de Santiago de Querétaro, México, se alzaba la Universidad Autónoma de Querétaro (UAQ), una institución legendaria donde los secretos de la magia se entrelazaban con el conocimiento académico. Entre los muros ancestrales de la UAQ, Gabriel Feregrino Hernández, nacido bajo los auspicios de la luna el 31 de mayo de 2003, emprendió su viaje hacia la grandeza. {'\n'}{'\n'}
        Desde temprana edad, Gabriel mostró un talento innato para la magia, un don que había heredado de ancestros olvidados en las páginas del tiempo. En la UAQ, bajo la tutela de maestros poderosos y sabios, Gabriel cultivó sus habilidades mágicas, dominando los secretos de los elementos y las artes arcanas.{'\n'}{'\n'}
        Pero la paz en la UAQ pronto se vio amenazada por las sombras del mal. Una fuerza oscura, conocida como el Culto de la Noche, surgió de las profundidades de la oscuridad, ansiosa por sumir al mundo en un reino de tinieblas. Con su líder, el despiadado mago oscuro Malphas, a la cabeza, el Culto de la Noche sembró el caos y la destrucción por dondequiera que pasaba.{'\n'}{'\n'}
        En su sexto semestre, Gabriel se encontró en el epicentro de la batalla contra el mal. Con sus amigos y aliados a su lado, se enfrentó al Culto de la Noche en una guerra de magia y espada que sacudió los cimientos del reino. En la batalla final, Gabriel y sus compañeros se encontraron frente a frente con Malphas en un duelo que determinaría el destino del mundo.{'\n'}{'\n'}
        La lucha fue titánica, con rayos y relámpagos iluminando el cielo oscuro como fuego de dragón. Pero Gabriel no vaciló, con su corazón lleno de determinación y su espada reluciente en la mano. En un acto de pura valentía, enfrentó a Malphas con todo su poder, desatando una ráfaga de magia que consumió el aire a su alrededor.{'\n'}{'\n'}
        En un instante fugaz, la batalla llegó a su clímax. Gabriel no titubeó, no mostró piedad. Con un movimiento certero, derrotó al malvado mago oscuro, sellando su destino en las sombras de la historia.{'\n'}{'\n'}
        La UAQ, ahora liberada del yugo del Culto de la Noche, celebró la victoria con júbilo y alegría. Gabriel Feregrino Hernández, el héroe de la UAQ, se convirtió en una leyenda viviente, cuyo nombre sería recordado por generaciones venideras como un símbolo de coraje y esperanza en tiempos de oscuridad. Y así, con su espada en alto y su corazón lleno de determinación, Gabriel se preparó para las muchas aventuras que aún esperaban en su camino, sabiendo que siempre estaría listo para defender la luz contra las sombras del mal.
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#444444',
    marginBottom: 1.5,
  },

  text2: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    marginTop: 5,
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: 'normal',
    color: '#444444',
  },

  titulos: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  contenedor: {
    marginBottom: 40
  }

});

export default TextComponent;
