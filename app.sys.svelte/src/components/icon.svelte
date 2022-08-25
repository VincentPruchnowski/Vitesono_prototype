<script>
  import { icons } from "../paths";

  export let id = undefined;
  export let size = 24; 
  export let icon = "empty"; 
  export let classes = undefined;
  export let style = undefined;
  export let fill = undefined;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  {id}
  {style}
  class={classes}><path d={icons[icon]} {fill} /></svg
>
