<template>
    <div class="org-tree-node" :class='{root: obj.root}'>
        <div class="org-tree-node-label">
            <slot>{{obj.label}}</slot>
        </div>
        <div class="org-tree-node-children" v-if="obj.children">
            <org v-for="node in obj.children" :obj="node" :key="node.id"></org>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    name: 'org',
    props: {
        obj: {
            type: Object,
            required: true,
            default: () => {
                return {}
            }
        }
    },
    created() {
        const obj = {};
        const obj2 = Object.assign(obj, {a: 123});
        console.log(...obj);
    },
    computed: {
        // newObj: () => {
        //     const tempObj = _.deepClone(this.obj);
        //     tempObj.root = true;
        //     return tempObj || {};
        // }
    }
}
</script>
<style lang="less">
.org-tree-node,.org-tree-node-children{
    position: relative;
}
.org-tree-node-children{
    display: flex;
    padding-top: 20px;
}
.org-tree-node-label{
    padding: 10px;
}


.org-tree-node{
    display: table-cell;
    padding-top: 20px;
    display: table-cell;
    vertical-align: top;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 19px;
    }
    &::after{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 19px;
    }
}
.org-tree-node-children:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 20px;
    border-left: 1px solid #ddd;
}
.org-tree-node:not(:first-child):before, .org-tree-node:not(:last-child):after {
    border-top: 1px solid #ddd;
}
.org-tree-node:after {
    left: 50%;
    border-left: 1px solid #ddd;
}
</style>

