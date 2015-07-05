# react-form-validation

Simple and powerful form validation library for React.

## Getting Started

### Install with NPM

```shell
npm install react-form-validation
```

### Install with Bower

```shell
bower install react-form-validation
```

### Install in web page

The project includes a browserified and minified version of the library that can be easily be
included into any web page. You may include the file `/dist/react-form-validation.js` on your
website.

```html
<script src="/path/to/react-form-validation.js"></script>
```

## Basic usage

Create a form instance. This is the configuration for your form. You will have to pass this form
as props to other components. You can save that object in the state of your component.

```javascript
getInitialState: function() {
    return {
        form: new Instance({
            fields: {
                name: Rules.required()
            }
        })
    };
}
```

Use the `Form`, `Input` and `Error` Components inside your project.

```html
<Form form={this.props.form} onSubmit={this.onSubmit}>
    <Input name="name" type="text" form={this.props.form} />
    <Error forName="name" form={this.props.form} />
</Form>
```
