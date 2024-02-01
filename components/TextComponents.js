import{Text, View, StyleSheet} from 'react-native';


const TextComponent = () => {
    return (
        <View> 
          <Text style={styles.text}> Gabriel Feregrino hernández</Text>
          <Text style={styles.text}> Ocupación: Estudiante </Text>
          <Text style={styles.text}> Edad: 20 años </Text>
          <Text style={styles.text}> Fecha de nacimiento: 31/May/2003 </Text>
          <Text style={styles.text}> Estado civil: Soltero </Text>
          <Text style={styles.text}> Grado de estudios: Licenciatura en proceso </Text>
          <Text style={styles.text}> Lugar de nacimiento: Santiego de Querétaro, Querétaro </Text>
          <Text style={styles.text}> Soy tan solo un instante en el transcurso de vida de toda la existencia, es más
            mi propia vivencia es insignificante. Nací sin un solo objetivo en la vida. En el todo soy nada y para la nada,
            soy la nada misma. </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#487eb0',
      }
})

export default TextComponent;