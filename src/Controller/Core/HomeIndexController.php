<?php

declare(strict_types=1);

namespace App\Controller\Core;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeIndexController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function __invoke(): Response
    {
        return $this->render('core/home_index.html.twig');
    }
}
