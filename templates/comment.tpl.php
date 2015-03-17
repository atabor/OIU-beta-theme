<article<?php print $attributes; ?>>

  <footer class="comment-submitted">
   <?php
      print t('<strong>!username</strong> on !datetime',
      array('!username' => $author, '!datetime' => '<time datetime="' . $datetime . '">' . $created . '</time>'));
    ?>
    
  <?php if (FALSE): ?>  
  <?php print $picture; ?>
  <?php endif; ?>

  </footer>

  <div<?php print $content_attributes; ?>>
    <?php
      hide($content['links']);
      print render($content);
    ?>
  </div>

  <?php if (!empty($content['links'])): ?>
    <nav class="links comment-links clearfix"><?php print render($content['links']); ?></nav>
  <?php endif; ?>

  <?php if ($signature): ?>
    <div class="user-signature"><?php print $signature ?></div>
  <?php endif; ?>


</article>