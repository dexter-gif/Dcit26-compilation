import React from 'react';
import {View, Text, ScrollView, Image, Button, Modal, ImageBackground,StyleSheet} from 'react-native';

  const SampleModal = props => {
  
  return (
    
    
    <Modal visible={props.visible} animationType="fade"> 
    <ImageBackground 
    style= {{ flex: 1 }} 
    source = {{
      uri: 'https://i.pinimg.com/originals/2b/cf/f1/2bcff16a079390dc8479586334f81a7e.png'}}>
      <ScrollView>
      <View style={styles.containers}>
       <Image style = {styles.picture} source={{uri:'https://cdn.shopify.com/s/files/1/0070/8362/2518/articles/Self-love-hug_300x300.jpg?v=1548994010'}} />

       <Text style ={styles.text}> 
       A Letter to my Growing Self {'\n\n'}

        I know this year has been rough . Things did not go well as planned. I have lost someone or something along the way. I am starting to feel anxious about what is happening around me. To be honest, I am still not sure about what to do in life. Sometimes I can think of an idea, but I cannot figure out how to do it. Overall, Life is testing  me in all different ways. {'\n\n'}
        However, I also understand that my life will remain stagnant if I will not do anything to change it. That is why no matter how difficult and unfair life gets, I will still commit in improving myself each day. {'\n\n'}
        I will stop comparing my progress from others. I strongly believe that I am capable of becoming great in my own ways. I juts have to consistently hone my skills and my mind until I get better at what I love to do. {'\n\n'}
        After years of practice, I will look back in my journey and appreciate the process that made me change my life for the better. I will see it that this transformation will not only happen to me, but to others as well. My ultimate goal is to help them achieve it; it is by helping others that makes this life meaningful. {'\n\n'}
        No matter how long the journey will take, I will commit to improving myself daily until I turn my dreams and goals into reality. (Ctto) {'\n\n'}

        Dear Me, {'\n\n'}

You and I go way back, to the beginning. We’re one hundred percent connected in a way no one will–or could ever–understand. We’ve been there, standing together. Sometimes crying in the shower, sometimes snorting through our nose, but it’s always been you and me. Always and forever… {'\n\n'}

Or so it was supposed to be, but some time ago I left you– I left you floundering on your own, to rely on love and encouragement and strength from others–from strangers–when it was I who should have held you up. When it was I who should have hugged you and praised you and appreciated you for the wondrous person you are–for all the beauty and life you bring to this world. {'\n\n'}

I seldom tell you how much I love you. How much I admire you. How beautiful and caring and intelligent and strong you are. That you are my hero.
I should have told you to ignore the jeers and snickers. To not care what others think. To not be afraid to be different. To not be ashamed of who you are. Worst of all,  I should have ignored the jeers and snickers. I shouldn’t have cared what people thought. Because in doing so, I said horrible things to shame you. I took you for granted and dishonored you. I said you’re not enough. That if you’d only be a better teacher, a better wife, a better friend, a better writer, a better lover…then I’d love you. If you were more confident, more social, more assertive, then I’d respect you. If you had less sun spots, if you ate less carbs, if you were more adventurous and thick-skinned, if you were a mother, if you achieved your goals, then I’d want you. I’ve said things to you I wouldn’t say to my worst enemy and you’ve taken it, and internalized every calloused word. {'\n\n'}

And for that I’ve lost you.{'\n\n'}

I know you are going through hard times right now. That life hasn’t given you what you hoped and hasn’t turned out the way you thought it would. I know you are disappointed and sometimes feel like a failure or that it is all your fault. But the truth is: YOU are not a failure nor could you ever be. YOU are strong and brave and honest and YOU will overcome. YOU will persevere and come out on the other side more YOU than you’ve ever been before.
You do not need anyone else’s approval, love, or friendship to be whole.{'\n\n'}

Together WE are enough. WE will conquer this new future. I’ve got you and this time I’m not letting go. Ever. This time, I will put you first.{'\n\n'}

I will respect you and honor you and cherish you.{'\n\n'}

Love for eternity,{'\n\n'}

Me
(ctto)
      
      </Text>
      </View>
      </ScrollView>
      

      <View style={styles.close}>
   <Button title  = "Close" onPress={props.onClose}/>
     </View>
     </ImageBackground>
    </Modal> 
  );

}
const styles = StyleSheet.create({
  containers: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
    
  }, 
  text: {
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20

  }, 
  picture:{
    width: 100,
    height: 100,
  },
  close: {
    paddingLeft: 120,
    paddingRight: 120,
  }

});

export default SampleModal;
