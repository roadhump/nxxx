import React from 'react';
import GoogleLogin from 'react-google-login';
import {compose, withState, withHandlers, withProps} from 'recompose';

import S from './App.css'

const App = ({errors, globalError, value, onChange, onSubmit, onSubmitGoogle, isComplete}) => (
    <div className={S.block}>
      <div className={S.toolbar}>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCA0NiAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TmVzdCBMb2dvPC90aXRsZT48cGF0aCBkPSJNMzMuNjUzIDE0LjEyYy44NjcuMzgyIDEuMzg1IDEuMTAyIDEuMzg1IDEuOTI0IDAgMS4wODgtLjgxIDEuNzM2LTIuMTcgMS43MzYtMS40NDMgMC0yLjExMy0xLjMxLTIuMjg1LTEuNzFsLS4yMS0uNDk2SDI3LjY3bC0uMDA0LS4wMDRoLTIuNTA0Yy0uNjgzIDEuMTc2LTIuMDYgMi4yNjEtMy42NjIgMi4yNjEtMi44OSAwLTQuMzMyLTIuMzI5LTQuNTE3LTQuNjI4aDExLjgxMlYxMi43YzAtLjk1NC0uMDk2LTEuODUtLjI3Ni0yLjY4NC4zMzggMS4wNyAxLjExIDIuMTc3IDIuNzI1IDIuOTYyLjU5LjI5IDEuNDguNzIyIDIuNDA5IDEuMTQxTTIxLjMzIDYuODEzYzIuNDE4IDAgMy42MDIgMS43MiAzLjk0NSAzLjQ3SDE3LjIzYy40Mi0xLjc1NCAxLjkxLTMuNDcgNC4xLTMuNDdtMjMuNzAzLjA1VjMuNzE4aC0yLjUxVjBIMzkuNDR2My43MThoLTYuMjFjLTIuODY3LjAwMi00Ljk0OCAxLjk5LTQuOTQ4IDQuNzMgMCAuMjk0LjAyNS42MTIuMDgzLjk0Mi0uOTc3LTMuNDkxLTMuNTUzLTUuNjcyLTcuMDExLTUuNjcyLTQuMjMxIDAtNy40NjUgMy4zOTctNy43MzYgNy45OTl2LS45NzhjMC0zLjg3Mi0zLjA1NS03LjAyLTYuODEtNy4wMkMzLjA1NSAzLjcxOCAwIDYuODY2IDAgMTAuNzM4djEwLjA2NWgzLjEyVjEwLjc0YzAtMi4wOTYgMS42NTQtMy44MDMgMy42ODktMy44MDMgMi4wMzMgMCAzLjY4OCAxLjcwNyAzLjY4OCAzLjgwM3YxMC4wNjVoMy4xMnYtNy44MzFDMTMuODkgMTcuNTkyIDE3LjE2OCAyMSAyMS40NTMgMjFjMi42MTYgMCA0LjkyNC0xLjU2NyA2LjIzLTMuMzgyLjk3NiAyLjE1IDIuODgyIDMuMzgyIDUuMjM1IDMuMzgyIDIuNzI4IDAgNS40OS0xLjc5NyA1LjQ5LTUuMjMyIDAtMi4wNTYtMS4xNTktMy43MzctMy4yNjItNC43MzQtLjI2OS0uMTI2LS40ODYtLjIzMi0uNjk0LS4zMzRsLS4wMjgtLjAxNWE1MC43OTQgNTAuNzk0IDAgMCAwLS43NDQtLjM1N2MtMS4zNzUtLjYzNi0yLjAzLTEuMTAzLTIuMDMtMi4wMzIgMC0uODE3LjcxLTEuNDMzIDEuNTg1LTEuNDMzaDYuMjA2djguOTY0YzAgMi44NTQgMi4yNSA1LjE3MyA1LjAxNiA1LjE3M3YtMy4xNzhjLTEuMDY2IDAtMS45MzQtLjg5NS0xLjkzNC0xLjk5NVY2Ljg2M2MxLjIzMy4wMDIgMi4xODQgMCAyLjUxMSAwIiBmaWxsPSIjN0M4Mjg3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K" />
      </div>
      <div className={S.inner}>
        <div className={S.form} onSubmit={onSubmit}>
          {isComplete ? (
            <div>
              {'Redirecting to app...'}
            </div>
          ) : (
            <form>
              <h2 className={S.title}>{'Support Admin'}</h2>
              {globalError ? (
                <div className={S.globalError}>{globalError}</div>
              ) : void 0}
              <div className={S.row}>
                <label className={errors.login ? S.labelErrors : void 0}>{'Login'}</label>
                <input
                  type="text"
                  className={errors.login ? S.inputErrors : void 0}
                  value={value.login || ''}
                  onChange={(e) => onChange({...value, login: e.target.value})}
                />
                {errors.login ? (
                  <div className={S.errors}>{errors.login}</div>
                ) : void 0}
              </div>
              <div className={S.row}>
                <label className={errors.password ? S.labelErrors : void 0}>{'Password'}</label>
                <input
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
                  {'Sign In'}
                </button>
              </div>

              <div className={S.separator}>
                <div className={S.separatorBorder} />
                <span className={S.separatorLabel}>{'Or'}</span>
              </div>
              <div className={S.buttonHolder} onClickCapture={onSubmitGoogle}>
                <div className="g-signin2" data-theme="light" data-longtitle="true"  />
              </div>
            </form>
          )}

        </div>
      </div>

    </div>
);

const validate = (value) => {


  const errors = {};

  if (!value.login) errors.login = 'This field is required';
  if (!value.password) errors.password = 'This password is required';

  return errors;

};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default compose(
  withState('errors', 'onErrorsChange', {}),
  withState('value', 'onChange', {}),
  withState('isDirty', 'onIsDirtyChange'),
  withState('progress', 'onProgressChange'),
  withState('isComplete', 'onIsCompleteChange'),
  withState('globalError', 'onGlobalErrorChange', ''),
  withHandlers({
    onSubmit: ({onErrorsChange, onProgressChange, onIsDirtyChange, onIsCompleteChange, value}) => (e) => {

      e.preventDefault();

      onIsDirtyChange(true);

      const errors = validate(value);

      onErrorsChange(errors);

      if (!Object.keys(errors).length) {

        onProgressChange(true);

        wait(5000).then(() => onIsCompleteChange(true));

      }



    },
    onChange: ({onChange, value, isDirty, onErrorsChange}) => (value) => {

      onChange(value)

      console.log(value, isDirty);

      if (!isDirty) return;

      const errors = validate(value);



      onErrorsChange(errors);


    },

    onSubmitGoogle: ({onGlobalErrorChange}) => (e) => {
      e.stopPropagation();
      e.preventDefault();
      onGlobalErrorChange('Ooops, Google does not work now');
    }

  }),
  // withProps(({}))
)(App);