import { useContext } from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function About() {
    const {currentMode } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "darkgray", fontSize: "22pt" }}>ABOUT</Text>
      <View style={{ backgroundColor: currentMode==='false'?"dodgerblue":'black' }}>
        <Text style={{ margin: "auto", color: "white", padding:5 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolorum
          aspernatur asperiores blanditiis hic maiores laudantium amet voluptate
          vel! Iste at sint consequatur facere recusandae, temporibus quo
          consequuntur cumque saepe. Aliquid labore optio quidem cupiditate quis
          magni? Itaque, rem harum debitis, nostrum explicabo nobis
          exercitationem ipsam minima soluta est labore earum laborum autem modi
          obcaecati quaerat ratione illo voluptate voluptatibus. Maxime rerum
          nemo laboriosam quam velit temporibus ab, odit sit eaque pariatur
          expedita eligendi et quae. Corporis sit nisi voluptates ipsa illum
          porro at, ratione, voluptas dolorum et tenetur incidunt? Commodi
          minima, et itaque nobis perferendis mollitia cum ea ab exercitationem,
          magni corrupti. Doloremque quidem inventore obcaecati sed omnis, ab
          earum, praesentium iste eos voluptatem consequuntur numquam corporis
          harum velit? Laborum numquam ut quos voluptates earum ad animi
          perferendis non facilis provident debitis, necessitatibus et, tempore
          odio porro iure perspiciatis esse. Dolorum, dicta repellat eius in
          odit quisquam tempora minima.
        </Text>
      </View>
    </View>
  );
}
