import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Input,
  InputLabel,
} from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = (theme, props) => ({
  card: {
    width: '100%',
    maxWidth: '1000px',
  },
  media: {
    height: '250px',
  },
  actions: {
    flexDirection: 'row-reverse',
  },
  centeredCard: {
    margin: '10% auto',
  },
});

class LoginForm extends Component {
  state = {
    showPassword: false,
  };

  handleShowPassword = () => this.setState({ showPassword: true });
  handleHidePassword = () => this.setState({ showPassword: false });

  render() {
    const {
      handleLogin,
      handleChange,
      formData,
      center,
      imageHeaderUrl,
      errors,
      loading,
      classes,
    } = this.props;
    const { showPassword } = this.state;

    return (
      <Card
        className={classNames(classes.card, {
          [classes.centeredCard]: center === true,
        })}
      >
        {imageHeaderUrl && (
          <CardMedia
            className={classes.media}
            image={imageHeaderUrl}
            title="Login"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Indentify Yourself
          </Typography>

          {errors.length > 0 && (
            <div>
              {errors.map(error => (
                <Typography color="error" variant="body2">
                  {error.message}
                </Typography>
              ))}
            </div>
          )}

          <FormControl fullWidth>
            <TextField
              required
              label="Email"
              id="email"
              margin="normal"
              value={formData.email}
              onChange={handleChange('email')}
              autoFocus={true}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleShowPassword}
                    onMouseDown={this.handleHidePassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardContent>
        <CardActions style={styles.actions}>
          <Button
            onClick={handleLogin}
            color="primary"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Verifying crendentials...' : 'Login'}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  imageHeaderUrl: PropTypes.string,
  center: PropTypes.bool,
  errors: PropTypes.array,
  loading: PropTypes.bool,
};

LoginForm.defaultProps = {
  imageHeaderUrl: null,
  center: false,
  loading: false,
  errors: [],
};

export default withStyles(styles)(LoginForm);
