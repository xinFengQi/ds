<!--
 * @Date: 2021-01-21 10:19:58
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 10:26:26
-->
# 表单

## 基本表单

这是具有基本表单的组件的示例：

```
@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css'
})
export class MyName {

  @State() value: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

让我们回顾一下这里发生的事情。首先，在这种情况下，我们将输入的值绑定到this.value状态变量上，，使用绑定到onInput的handleChange方法将状态变量设置为输入的新值。onInput将触发用户在输入中键入的每个按键。


## 进阶表单

这是具有更高级表单的组件的示例：

```
@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css'
})
export class MyName {
  selectedReceiverIds = [102, 103];
  @State() value: string;
  @State() selectValue: string;
  @State() secondSelectValue: string;
  @State() avOptions: any[] = [
    { 'id': 101, 'name': 'Mark' },
    { 'id': 102, 'name': 'Smith' }
  ];

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
  }

  handleChange(event) {
    this.value = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.selectValue = event.target.value;
  }

  handleSecondSelect(event) {
    console.log(event.target.value);
    this.secondSelectValue = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Email:
          <input type="email" value={this.value} onInput={(e) => this.handleChange(e)} />
        </label>

        <select onInput={(event) => this.handleSelect(event)}>
          <option value="volvo" selected={this.selectValue === 'volvo'}>Volvo</option>
          <option value="saab" selected={this.selectValue === 'saab'}>Saab</option>
          <option value="mercedes" selected={this.selectValue === 'mercedes'}>Mercedes</option>
          <option value="audi" selected={this.selectValue === 'audi'}>Audi</option>
        </select>

        <select onInput={(event) => this.handleSecondSelect(event)}>
          {this.avOptions.map(recipient => (
            <option value={recipient.id} selected={this.selectedReceiverIds.indexOf(recipient.id) !== -1}>{recipient.name}</option>
          ))}
        </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

这个表单更高级一些，因为它有两个选择输入和一个电子邮件输入。我们还在handleChange方法中对我们的电子邮件输入进行有效性检查。我们处理select元素的方式与处理文本输入的方式非常相似。
对于有效性检查，我们使用#usingtheplatform，并使用内置在浏览器中的[约束验证api](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)来检查用户是否真的在输入邮件。