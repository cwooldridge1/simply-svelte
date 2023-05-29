<script>
  import Card from "../lib/components/elements/Card.svelte";
  import Header from "../lib/components/elements/Header.svelte";
  import Input from "../lib/components/elements/forms/Input.svelte";
  import InputAddon from "../lib/components/elements/forms/InputAddon.svelte";
  import TextArea from "../lib/components/elements/forms/TextArea.svelte";
</script>

<div class="grid grid-cols-1 gap-4">
  <div>
    <Header>Cards</Header>
    <Card>
      <div class="p-4">
        <p class="text-sm text-gray-700 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          cupiditate laborum fugiat.
        </p>
      </div>
    </Card>
  </div>
  <div>
    <Header>Buttons</Header>
    <Card>
      <div class="grid grid-cols-5 gap-2">
        <button class="btn btn-info">Info</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-primary">Primary</button>

        <button class="btn btn-outline-info">Info</button>
        <button class="btn btn-outline-success">Success</button>
        <button class="btn btn-outline-warning">Warning</button>
        <button class="btn btn-outline-danger">Danger</button>
        <button class="btn btn-outline-primary">Primary</button>

        <button class="btn btn-inverse-info">Info</button>
        <button class="btn btn-inverse-success">Success</button>
        <button class="btn btn-inverse-warning">Warning</button>
        <button class="btn btn-inverse-danger">Danger</button>
        <button class="btn btn-inverse-primary">Primary</button>
      </div>
    </Card>
  </div>
  <div>
    <Header>Forms</Header>
    <Card>
      <Input value="" placeholder="email" />
      <br />
      <div class="flex">
        <InputAddon>$</InputAddon>
        <Input value="" placeholder="amount" />
      </div>
    </Card>
  </div>
</div>
