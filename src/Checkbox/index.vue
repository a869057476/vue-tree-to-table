<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-03-11 21:55:59
 * @LastEditors: huangwei
 * @LastEditTime: 2021-03-12 00:09:32
-->
<template> 
  <div class="checkbox" :class="disabled ? 'disabled' : ''">
    <input type="checkbox" :id="id" :checked="checked" :disabled="disabled" @change="checkChange($event)"/>        
    <label :for="id">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
export default {  
  name: 'Checkbox',  
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: '',
    // 选项名称   
    label: {
      type: String,
      default: '选项'
    },
    // 是否禁止选择，默认false    
    disabled: {      
      type: Boolean,      
      default: false    
    },
    // checkbox选中的值
    trueLabel: {
      type: [Boolean, String, Number],
      default: true
    },
    // checkbox未选中的值
    falseLabel: {
      type: [Boolean, String, Number],
      default: false
    },
  },
  data() {
    return {
      id: ''
    }
  },
  computed: {
    checked() {
      return this.value === this.trueLabel ? true : ''
    }
  },
  created() {
    this.id = this.genID()  
  },
  methods: {    
    checkChange(e) {      
      this.$emit('change', e.target.checked ? this.trueLabel : this.falseLabel)
    },
    genID() {
      return Math.random() + Date.now()
    }
  }
}
</script>
<style lang="less" scoped>
.checkbox {
  margin-right: 10px;
  display: inline-block;
  input {      
    display: none;    
  }    
  label::before {     
    content: '√';
    width: 14px;
    height: 14px;
    line-height: 14px;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
    color: transparent;
    margin-right: 5px;
    font-size: 12px;
  }
  label {
    color: #606266;
  } 
  & input[type='checkbox']:checked ~ label {      
    color: #409eff;
  }    
  & input[type='checkbox']:checked ~ label::before {     
    content: '√';
    color: #409eff;
    border: 1px solid #409eff;
  }
  &.disabled {
    label {
      color: #ccc;
      cursor: not-allowed;
    }      
    label::before {        
      content: '√';
      border: 1px solid #ccc;
      color: transparent;
    }      
    & input[type='checkbox']:checked ~ label {
      color: #ccc;     
    }     
    & input[type='checkbox']:checked ~ label::before {
      content: '√';
      color: #ccc;
      border: 1px solid #ccc;
    } 
  }
}
</style>
