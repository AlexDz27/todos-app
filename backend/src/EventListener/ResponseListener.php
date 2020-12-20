<?php

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\ResponseEvent;

class ResponseListener
{
  public function onKernelResponse(ResponseEvent $event): void
  {
    $response = $event->getResponse();
    $response->headers->set('Access-Control-Allow-Origin', 'http://localhost:3000');

    $event->setResponse($response);
  }
}