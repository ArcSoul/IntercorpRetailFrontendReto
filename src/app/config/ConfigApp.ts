// @ts-ignore
import logoBusiness from '../../assets/images/logo.png';

type ThemeColor = 'primary' | 'secondary' | 'tertiary';



class ConfigAppModel {
  businessName!: string;
  logo?: any;
  primaryColor!: string;
  secondaryColor!: string;
  tertiaryColor!: string;
  textPrimary!: string;
  textSecondary!: string;
  textTertiary!: string;
}

const ConfigApp: ConfigAppModel = {
  businessName: `Reto Intercorp Retail`,
  logo: logoBusiness,
  primaryColor: `#66D7D1`,
  secondaryColor: `#FF637D`,
  tertiaryColor: `#EAF2E3`,
  textPrimary: `#000000`,
  textSecondary: `#FFFFFF`,
  textTertiary: `#3A4759`,
};

export { ThemeColor, ConfigApp };
