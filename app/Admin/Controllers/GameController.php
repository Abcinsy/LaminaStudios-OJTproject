<?php

namespace App\Admin\Controllers;

use App\Models\Game;
use App\Models\PartnerStudio;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class GameController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Game';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Game());

        $grid->column('id', __('Id'));
        $grid->column('partner_studio_id', __('Partner studio id'));
        $grid->column('name', __('Name'));
        $grid->column('blurb', __('Blurb'));
        $grid->column('description', __('Description'));
        $grid->column('link', __('Link'));
        $grid->column('image_name', __('Image name'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Game::findOrFail($id));

        $show->field('id', __('Id'));
        $show->partner_studio('Partner Studio', function ($partner_studio) {
            $partner_studio->setResource('/admin/partner-studios');

            $partner_studio->name();
            $partner_studio->name();
            $partner_studio->blurb();
            $partner_studio->description();
            $partner_studio->link();
            $partner_studio->image_name();
        });
        $show->field('name', __('Name'));
        $show->field('blurb', __('Blurb'));
        $show->field('description', __('Description'));
        $show->field('link', __('Link'));
        $show->field('image_name', __('Image name'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Game());

        $form->select('partner_studio_id', __('Partner Studio'))->options(PartnerStudio::all()->pluck('name', 'id'));
        $form->text('name', __('Name'));
        $form->text('blurb', __('Blurb'));
        $form->text('description', __('Description'));
        $form->url('link', __('Link'));
        $form->text('image_name', __('Image name'));

        return $form;
    }
}
