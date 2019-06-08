<script>
  import MailChimp from './MailChimp.svelte';
</script>

<style>
* {
  color: #333;
}

footer {
  display: grid;
  grid-template-columns: 175px auto 175px;
  justify-items: center;
  align-items: center;
  padding: 1em;
}

.contact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  grid-gap: .5em;
}

.badName {
  grid-column: 1 / span 3;
  text-decoration: none;
}

.badName:hover {
  color: #a553ba;
}

.socialMediaIcon {
  grid-row: 3 / span 1;
}
</style>

<footer>

  <MailChimp />

  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=7G65H8ZWEKR74" target="_blank" rel="nofollow">
    <img class=" aligncenter" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate" />
  </a>
  
  <div class="contact">
    <a class="badName" href="mailto:info@jerboadance.com">info@jerboadance.com</a>
    <a class="badName" href="tel:+12135372627">213-537-2627</a>
    <a class="socialMediaIcon" href="https://www.facebook.com/JerboaDance/" target="_blank">
      <img src="/assets/footer/facebook.png" alt="Visit Jerboa Dance on Facebook"/>
    </a>
    <a class="socialMediaIcon" href="https://twitter.com/jerboadance" target="_blank">
      <img src="/assets/footer/twitter.png" alt="Visit Jerboa Dance on Twitter"/>
    </a>
    <a class="socialMediaIcon" href="https://www.instagram.com/jerboadance/" target="_blank">
      <img src="/assets/footer/instagram.png" alt="Visit Jerboa Dance on Instagram"/>
    </a>
  </div>
</footer>