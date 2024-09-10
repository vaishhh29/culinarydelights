// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpenScreen from './opening';
import LoginScreen from './LoginScreen';
import Cuisines from './cuisines';
import Option1 from './option';
import Mrngjap from './jap_mrng_list';
import RiceMisoSoupRecipe from './rice_miso';
import TamaRecipe from './Tamago_gohan';
import NattoRecipe from './natto';
import JapaneseTamagoyaki from './jap_omlette';
import RiceBallRecipe from './riceball';
import AccountInfo from './AccountInfo';
import Lunchjap from './jap_lunch';
import SobaRecipe from './Soba';
import RamenRecipe from './ramen';
import DonburiRecipe from './donburi';
import TempuraRecipe from './tempura';
import SushiballsRecipe from './sushi_roll';
import Snackjap from './jap_snacks'
import PockyRecipe from './pocky';
import MochiRecipe from './mochi';
import IceCreamRecipe from './icecream';
import DorayakiRecipe from './Dorayaki';
import TaiyakiRecipe from './Taiyaki';
import Dessertjap from './jap_dessert';
import PieRecipe from './pie';
import CherryRecipe from './cherry';
import PuddingRecipe from './pudding';
import AnmitsuRecipe from './anmitsu';
import CheesecakeRecipe from './cheesecake';
import IndianOption from './indian_option';
import MrngIndian from './indian_mrng';
import PohaRecipe from './poha';
import AlooPuriRecipe from './aloo';
import UttapamRecipe from './uttapam';
import MethiTheplaRecipe from './methi';
import PongalRecipe from './pongal';
import LunchIndian from './indian_lunch';
import ChickenBiryaniRecipe from './biryani';
import ButterChickenRecipe from './butterchick';
import CholeBhatureRecipe from './chole';
import FishCurryRecipe from './fishcurry';
import DalMakhaniRecipe from './dal';
import SnackIndian from './indian_snack';
import SamosaRecipe from './samosa';
import PakoraRecipe from './pakora';
import PaniPuriRecipe from './pani';
import DhoklaRecipe from './dhokla';
import BhelPuriRecipe from './bhel';
import DessertIndian from './indian_desserts';
import JalebiRecipe from './jalebi';
import RasgullaRecipe from './rasgulla';
import KheerRecipe from './kheer';
import BarfiRecipe from './barfi';
import MishtiDoiRecipe from './doi';

import MrngMexican from './mexican_mrng';
import ChilaquilesRecipe from './chilaquiles';
import HuevosRancherosRecipe from './HuevosRancheros';
import MolletesRecipe from './Molletes';
import CachapasRecipe from './Cachapas';
import PambazosRecipe from './Pambazos';
import RecipeDetails from './RecipeDetails';
import MexOption from './mex_options';
import LunchMex from './mex_lunch';
import TacosRecipe from './tacos';
import BurritosRecipe from './burrito';
import PozoleRecipe from './pozole';
import SopesRecipe from './sopes';
import TamalesRecipe from './tamales';
import SavedRecipe from './SavedRecipe';
import BooksScreen from './books';
import FrenchOption from './french_option';
import OrderFormScreen from './orderform';
import SnackMex from './mex_snack';
import StreetCornRecipe from './streetcorn';
import EnchiladasSuizasRecipe from './enchiladas';
import DeviledShrimpRecipe from './deviledshrimp';
import TostadasRecipe from './tostadas';
import ChurrosRecipe from './churros';
import DessertMex from './mex_dess';
import TresLechesCakeRecipe from './tres';
import FlanRecipe from './fan';
import SopapillasRecipe from './sopapillas';
import BunuelosRecipe from './Buñuelos';
import ArrozConLecheRecipe from './arrorcon';
import MrngFrench from './french_mrng';
import PainAuChocolatRecipe from './pain';
import BaguetteRecipe from './Baguette';
import PainPerduRecipe from './PainPerdu';
import CroqueMonsieurRecipe from './croque';
import QuicheRecipe from './quiche';
import LunchFrench from './french_lunch';
import SaladeNicoiseRecipe from './Niçoise';
import QuicheLorraineRecipe from './Lorraine';
import TartifletteRecipe from './Tartiflette';
import SaladeChevreChaudRecipe from './Chaud';
import SaladeLyonnaiseRecipe from './lyonnaise';
import SnackFrench from './french_snack';
import GougeresRecipe from './Gougères';
import PissaladiereBitesRecipe from './Bites';
import SavoryMadeleinesRecipe from './Madeleines';
import SmokedSalmonPinwheelsRecipe from './Pinwheels';
import MiniQuichesRecipe from './Mini';
import DessFrench from './french_dess';
import CremeBruleeRecipe from './Brûlée';
import EclairsRecipe from './Éclairs';
import ChocolateMousseRecipe from './Mousse';
import MacaronsRecipe from './Macarons';
import ClafoutisRecipe from './Clafoutis';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={OpenScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="cuisines" component={Cuisines}/>
        <Stack.Screen name="option" component={Option1}/>

        <Stack.Screen name="AccountInfo" component={AccountInfo}/>
        <Stack.Screen name="SavedRecipe" component={SavedRecipe}/>
        <Stack.Screen name="RecipeDetails" component={RecipeDetails}/>
        <Stack.Screen name="BooksScreen" component={BooksScreen}/>
        <Stack.Screen name="OrderFormScreen" component={OrderFormScreen}/>

        <Stack.Screen name="Mrngjap" component={Mrngjap}/>
        <Stack.Screen name="RiceMisoSoupRecipe" component={RiceMisoSoupRecipe}/>
        <Stack.Screen name="TamaRecipe" component={TamaRecipe}/>
        <Stack.Screen name="NattoRecipe" component={NattoRecipe}/>
        <Stack.Screen name="JapaneseTamagoyaki" component={JapaneseTamagoyaki}/>
        <Stack.Screen name="RiceBallRecipe" component={RiceBallRecipe}/>

        <Stack.Screen name="Lunchjap" component={Lunchjap}/>
        <Stack.Screen name="SobaRecipe" component={SobaRecipe}/>
        <Stack.Screen name="RamenRecipe" component={RamenRecipe}/>
        <Stack.Screen name="DonburiRecipe" component={DonburiRecipe}/>
        <Stack.Screen name="TempuraRecipe" component={TempuraRecipe}/>
        <Stack.Screen name="SushiballsRecipe" component={SushiballsRecipe}/>

        <Stack.Screen name="Snackjap" component={Snackjap}/>
        <Stack.Screen name="PockyRecipe" component={PockyRecipe}/>
        <Stack.Screen name="MochiRecipe" component={MochiRecipe}/>
        <Stack.Screen name="IcecreamRecipe" component={IceCreamRecipe}/>
        <Stack.Screen name="DorayakiRecipe" component={DorayakiRecipe}/>
        <Stack.Screen name="TaiyakiRecipe" component={TaiyakiRecipe}/>

        <Stack.Screen name="Dessertjap" component={Dessertjap}/>
        <Stack.Screen name="PieRecipe" component={PieRecipe}/>
        <Stack.Screen name="CherryRecipe" component={CherryRecipe}/>
        <Stack.Screen name="PuddingRecipe" component={PuddingRecipe}/>
        <Stack.Screen name="AnmitsuRecipe" component={AnmitsuRecipe}/>
        <Stack.Screen name="CheesecakeRecipe" component={CheesecakeRecipe}/>

         <Stack.Screen name="IndianOption" component={IndianOption}/>
         <Stack.Screen name="MrngIndian" component={MrngIndian}/>
         <Stack.Screen name="PohaRecipe" component={PohaRecipe}/>
         <Stack.Screen name="AlooPuriRecipe" component={AlooPuriRecipe}/>
         <Stack.Screen name="UttapamRecipe" component={UttapamRecipe}/>
         <Stack.Screen name="MethiTheplaRecipe" component={MethiTheplaRecipe}/>
         <Stack.Screen name="PongalRecipe" component={PongalRecipe}/>

         <Stack.Screen name="LunchIndian" component={LunchIndian}/>
         <Stack.Screen name="ChickenBiryaniRecipe" component={ChickenBiryaniRecipe}/>
         <Stack.Screen name="ButterChickenRecipe" component={ButterChickenRecipe}/>
         <Stack.Screen name=" CholeBhatureRecipe" component={CholeBhatureRecipe}/>
         <Stack.Screen name="FishCurryRecipe" component={FishCurryRecipe}/>
         <Stack.Screen name="DalMakhaniRecipe" component={DalMakhaniRecipe}/>

         <Stack.Screen name="SnackIndian" component={SnackIndian}/>
         <Stack.Screen name="SamosaRecipe" component={SamosaRecipe}/>
         <Stack.Screen name="PakoraRecipe" component={PakoraRecipe}/>
         <Stack.Screen name="PaniPuriRecipe" component={PaniPuriRecipe}/>
         <Stack.Screen name="DhoklaRecipe" component={DhoklaRecipe}/>
         <Stack.Screen name="BhelPuriRecipe" component={BhelPuriRecipe}/>
        
         <Stack.Screen name="DessertIndian" component={DessertIndian}/>
         <Stack.Screen name="JalebiRecipe" component={JalebiRecipe}/>
         <Stack.Screen name="RasgullaRecipe" component={RasgullaRecipe}/>
         <Stack.Screen name="KheerRecipe" component={KheerRecipe}/>
         <Stack.Screen name="BarfiRecipe" component={BarfiRecipe}/>
         <Stack.Screen name="MishtiDoiRecipe" component={MishtiDoiRecipe}/>

         <Stack.Screen name="MexOption" component={MexOption}/>
        <Stack.Screen name="MrngMexican" component={MrngMexican}/> 
        <Stack.Screen name="ChilaquilesRecipe" component={ChilaquilesRecipe}/>
        <Stack.Screen name="HuevosRancherosRecipe" component={HuevosRancherosRecipe}/>
        <Stack.Screen name="MolletesRecipe" component={MolletesRecipe}/>
        <Stack.Screen name="CachapasRecipe" component={CachapasRecipe}/>
        <Stack.Screen name="PambazosRecipe" component={PambazosRecipe}/>
       
        <Stack.Screen name="LunchMex" component={LunchMex}/>
        <Stack.Screen name="TacosRecipe" component={TacosRecipe}/>
        <Stack.Screen name="BurritosRecipe" component={BurritosRecipe}/>
        <Stack.Screen name="PozoleRecipe" component={PozoleRecipe}/>
        <Stack.Screen name="SopesRecipe" component={SopesRecipe}/>
        <Stack.Screen name="TamalesRecipe" component={TamalesRecipe}/>
        
        <Stack.Screen name="SnackMex" component={SnackMex}/>
        <Stack.Screen name="StreetCornRecipe" component={StreetCornRecipe}/>
        <Stack.Screen name="EnchiladasSuizasRecipe" component={EnchiladasSuizasRecipe}/>
        <Stack.Screen name="DeviledShrimpRecipe" component={DeviledShrimpRecipe}/>
        <Stack.Screen name="TostadasRecipe" component={TostadasRecipe}/>
        <Stack.Screen name="ChurrosRecipe" component={ChurrosRecipe}/>

       <Stack.Screen name="DessertMex" component={DessertMex}/>
       <Stack.Screen name="TresLechesCakeRecipe" component={TresLechesCakeRecipe}/>
       <Stack.Screen name="FlanRecipe" component={FlanRecipe}/>
       <Stack.Screen name="SopapillasRecipe" component={SopapillasRecipe}/>
       <Stack.Screen name="BunuelosRecipe" component={BunuelosRecipe}/>
       <Stack.Screen name="ArrozConLecheRecipe" component={ArrozConLecheRecipe}/>

        <Stack.Screen name="FrenchOption" component={FrenchOption}/>
        <Stack.Screen name="MrngFrench" component={MrngFrench}/>
        <Stack.Screen name="PainAuChocolatRecipe" component={PainAuChocolatRecipe}/>
        <Stack.Screen name="BaguetteRecipe" component={BaguetteRecipe}/>
        <Stack.Screen name="PainPerduRecipe" component={PainPerduRecipe}/>
        <Stack.Screen name="CroqueMonsieurRecipe" component={CroqueMonsieurRecipe}/>
        <Stack.Screen name="QuicheRecipe" component={QuicheRecipe}/>
           
        <Stack.Screen name="LunchFrench" component={LunchFrench}/>
        <Stack.Screen name="SaladeNicoiseRecipe" component={SaladeNicoiseRecipe}/>
        <Stack.Screen name="QuicheLorraineRecipe" component={QuicheLorraineRecipe}/>
        <Stack.Screen name="TartifletteRecipe" component={TartifletteRecipe}/> 
        <Stack.Screen name="SaladeChevreChaudRecipe" component={SaladeChevreChaudRecipe}/>
        <Stack.Screen name="SaladeLyonnaiseRecipe" component={SaladeLyonnaiseRecipe}/> 

        <Stack.Screen name="SnackFrench" component={SnackFrench}/>
        <Stack.Screen name="GougeresRecipe" component={GougeresRecipe}/>
        <Stack.Screen name="PissaladiereBitesRecipe" component={PissaladiereBitesRecipe}/>
        <Stack.Screen name="SavoryMadeleinesRecipe" component={SavoryMadeleinesRecipe}/>
        <Stack.Screen name="SmokedSalmonPinwheelsRecipe" component={SmokedSalmonPinwheelsRecipe}/>
        <Stack.Screen name="MiniQuichesRecipe" component={MiniQuichesRecipe}/>
        
        <Stack.Screen name="DessFrench" component={DessFrench}/>
        <Stack.Screen name="CremeBruleeRecipe" component={CremeBruleeRecipe}/>
        <Stack.Screen name="EclairsRecipe" component={EclairsRecipe}/>
        <Stack.Screen name="ChocolateMousseRecipe" component={ChocolateMousseRecipe}/>
        <Stack.Screen name="MacaronsRecipe" component={MacaronsRecipe}/>
        <Stack.Screen name="ClafoutisRecipe" component={ClafoutisRecipe}/>

      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;




