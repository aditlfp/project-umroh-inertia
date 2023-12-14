<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeroResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'bulan' => $this->bulan,
            'tahun' => $this->tahun,
            'sub_title' => $this->sub_title,
            'img' => $this->img
        ];
    }
}
