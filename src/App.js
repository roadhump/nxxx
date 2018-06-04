import React from 'react';
import {compose, withState, withHandlers, withProps} from 'recompose';

import Spinner from './Spinner';

import S from './App.css'

const App = ({
  errors,
  globalError,
  value,
  onChange,
  onSubmit,
  onSubmitGoogle,
  isComplete,
  showLoginForm,
  inProgress,
}) => (
    <div className={S.block}>
      <div className={S.toolbar}>
        <img alt="logo" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCA0NiAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TmVzdCBMb2dvPC90aXRsZT48cGF0aCBkPSJNMzMuNjUzIDE0LjEyYy44NjcuMzgyIDEuMzg1IDEuMTAyIDEuMzg1IDEuOTI0IDAgMS4wODgtLjgxIDEuNzM2LTIuMTcgMS43MzYtMS40NDMgMC0yLjExMy0xLjMxLTIuMjg1LTEuNzFsLS4yMS0uNDk2SDI3LjY3bC0uMDA0LS4wMDRoLTIuNTA0Yy0uNjgzIDEuMTc2LTIuMDYgMi4yNjEtMy42NjIgMi4yNjEtMi44OSAwLTQuMzMyLTIuMzI5LTQuNTE3LTQuNjI4aDExLjgxMlYxMi43YzAtLjk1NC0uMDk2LTEuODUtLjI3Ni0yLjY4NC4zMzggMS4wNyAxLjExIDIuMTc3IDIuNzI1IDIuOTYyLjU5LjI5IDEuNDguNzIyIDIuNDA5IDEuMTQxTTIxLjMzIDYuODEzYzIuNDE4IDAgMy42MDIgMS43MiAzLjk0NSAzLjQ3SDE3LjIzYy40Mi0xLjc1NCAxLjkxLTMuNDcgNC4xLTMuNDdtMjMuNzAzLjA1VjMuNzE4aC0yLjUxVjBIMzkuNDR2My43MThoLTYuMjFjLTIuODY3LjAwMi00Ljk0OCAxLjk5LTQuOTQ4IDQuNzMgMCAuMjk0LjAyNS42MTIuMDgzLjk0Mi0uOTc3LTMuNDkxLTMuNTUzLTUuNjcyLTcuMDExLTUuNjcyLTQuMjMxIDAtNy40NjUgMy4zOTctNy43MzYgNy45OTl2LS45NzhjMC0zLjg3Mi0zLjA1NS03LjAyLTYuODEtNy4wMkMzLjA1NSAzLjcxOCAwIDYuODY2IDAgMTAuNzM4djEwLjA2NWgzLjEyVjEwLjc0YzAtMi4wOTYgMS42NTQtMy44MDMgMy42ODktMy44MDMgMi4wMzMgMCAzLjY4OCAxLjcwNyAzLjY4OCAzLjgwM3YxMC4wNjVoMy4xMnYtNy44MzFDMTMuODkgMTcuNTkyIDE3LjE2OCAyMSAyMS40NTMgMjFjMi42MTYgMCA0LjkyNC0xLjU2NyA2LjIzLTMuMzgyLjk3NiAyLjE1IDIuODgyIDMuMzgyIDUuMjM1IDMuMzgyIDIuNzI4IDAgNS40OS0xLjc5NyA1LjQ5LTUuMjMyIDAtMi4wNTYtMS4xNTktMy43MzctMy4yNjItNC43MzQtLjI2OS0uMTI2LS40ODYtLjIzMi0uNjk0LS4zMzRsLS4wMjgtLjAxNWE1MC43OTQgNTAuNzk0IDAgMCAwLS43NDQtLjM1N2MtMS4zNzUtLjYzNi0yLjAzLTEuMTAzLTIuMDMtMi4wMzIgMC0uODE3LjcxLTEuNDMzIDEuNTg1LTEuNDMzaDYuMjA2djguOTY0YzAgMi44NTQgMi4yNSA1LjE3MyA1LjAxNiA1LjE3M3YtMy4xNzhjLTEuMDY2IDAtMS45MzQtLjg5NS0xLjkzNC0xLjk5NVY2Ljg2M2MxLjIzMy4wMDIgMi4xODQgMCAyLjUxMSAwIiBmaWxsPSIjN0M4Mjg3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K" />
      </div>
      <div className={S.inner}>
        <div className={S.form} onSubmit={onSubmit}>
          {isComplete ? (
            <div className={S.complete}>
              <div className={S.completeLine}>
                <Spinner style={{width: '1.2em', height: '1.2em', marginRight: 8}} />
                {'Redirecting to application...'}
              </div>
            </div>
          ) : (
            <form>
              <h2 className={S.title}>{'Support Admin'}</h2>
              {globalError ? (
                <div className={S.globalError}>
                  <span className={S.globalErrorIcon} role="img" aria-label="warn">⚠️</span>
                  {globalError}
                </div>
              ) : void 0}
              {showLoginForm ? (
                <div>
                  <div className={S.row}>
                    <label htmlFor="login" className={errors.login ? S.labelErrors : void 0}>{'Login'}</label>
                    <input
                      id="login"
                      type="text"
                      className={errors.login ? S.inputErrors : void 0}
                      value={value.login || ''}
                      onChange={(e) => onChange({...value, login: e.target.value})}
                      placeholder={'admin@nest.com'}
                      autoFocus={true}
                    />
                    {errors.login ? (
                      <div className={S.errors}>{errors.login}</div>
                    ) : void 0}
                  </div>
                  <div className={S.row}>
                    <label htmlFor="password" className={errors.password ? S.labelErrors : void 0}>{'Password'}</label>
                    <input
                      id="password"
                      type="password"
                      className={errors.password ? S.inputErrors : void 0}
                      value={value.password || ''}
                      onChange={(e) => onChange({...value, password: e.target.value})}
                    />
                    {errors.password ? (
                      <div className={S.errors}>{errors.password}</div>
                    ) : void 0}
                  </div>
                  <div className={S.row}>
                    <button
                      className={S.submit}
                      type="submit"
                    >
                      {inProgress ? (
                        <Spinner
                          color="#fff"
                          style={{height: 18, width: 18, margin: '0 auto'}}
                        />
                      ) : (
                        'Sign in'
                      )}
                    </button>
                  </div>

                  <div className={S.separator}>
                    <div className={S.separatorBorder} />
                    <span className={S.separatorLabel}>{'or'}</span>
                  </div>
                </div>
              ) : void 0}
              <div className={S.buttonHolder}>
                <div
                  className="g-signin2"
                  data-theme="dark"
                  data-longtitle="true"
                  onClick={onSubmitGoogle}
                />
              </div>
            </form>
          )}

        </div>
      </div>

    </div>
);

const validate = (value) => {

  const errors = {};

  if (!value.login) errors.login = 'Login is required';
  if (!value.password) errors.password = 'Password is required';

  return errors;

};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default compose(
  withState('errors', 'onErrorsChange', {}),
  withState('value', 'onChange', {}),
  withState('isDirty', 'onIsDirtyChange'),
  withState('inProgress', 'onInProgressChange'),
  withState('isComplete', 'onIsCompleteChange'),
  withState('globalError', 'onGlobalErrorChange'),
  withProps(({onGoogleSuccess, onGoogleFailure}) => {

    window.onGoogleSuccess = onGoogleSuccess;
    window.onGoogleFailure = onGoogleSuccess;

    const searchParams = (new URL(document.location)).searchParams;

    return {
      showLoginForm: searchParams.get('showLoginForm'),
      showErrorOnSubmit: searchParams.get('showErrorOnSubmit'),
    };

  }),
  withHandlers({
    onSubmit: ({
      onErrorsChange,
      onInProgressChange,
      onIsDirtyChange,
      onIsCompleteChange,
      value,
      showErrorOnSubmit,
      onGlobalErrorChange,
    }) => (e) => {

      e.preventDefault();

      onIsDirtyChange(true);

      const errors = validate(value);

      onErrorsChange(errors);

      if (!Object.keys(errors).length) {

        onInProgressChange(true);

        wait(3000)
        .then(() =>
          showErrorOnSubmit ?
            onGlobalErrorChange('Please login with authorized account') :
            onIsCompleteChange(true)
        )
        .then(() => onInProgressChange(false));

      }



    },
    onChange: ({
      onChange,
      value,
      isDirty,
      onErrorsChange,
      globalError,
      onGlobalErrorChange,
    }) => (value) => {

      onChange(value)

      if (!isDirty) return;
      if (globalError) onGlobalErrorChange(void 0);

      const errors = validate(value);

      onErrorsChange(errors);


    },


    onSubmitGoogle: ({
      onGlobalErrorChange,
      showErrorOnSubmit,
      onIsCompleteChange,
    }) => (e) => {

      e.stopPropagation();
      e.preventDefault();

      if (showErrorOnSubmit) {
        onGlobalErrorChange('Please login with authorized account');
      } else {
        onIsCompleteChange(true);
      }

    },

  }),

)(App);