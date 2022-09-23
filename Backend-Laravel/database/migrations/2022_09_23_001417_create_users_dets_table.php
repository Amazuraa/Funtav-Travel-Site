<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersDetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_dets', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->integer('id')->primary('id');
            $table->string('name');
            $table->string('phone');
            $table->text('address');
            $table->text('departures');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_dets');
    }
}
