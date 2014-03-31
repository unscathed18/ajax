<?php

namespace Unscathed18\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('Unscathed18MainBundle:Default:index.html.twig', array('name' => $name));
    }
}
