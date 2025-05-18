import styles from './Login.module.css';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ButtonWrapper from '../../components/common/ButtonWrapper';
import LinkButton from '../../components/common/LinkButton';

const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LOGIN</h2>
      <form className={styles.form}>
        <Input type="text" placeholder="ID"  />
        <Input type="password" placeholder="PW" />
        <ButtonWrapper>
          <Button type="submit" >LOGIN</Button>
          <LinkButton to="/signup">SignUp</LinkButton>
        </ButtonWrapper>
      </form>
    </div>
  );
};

export default Login;
