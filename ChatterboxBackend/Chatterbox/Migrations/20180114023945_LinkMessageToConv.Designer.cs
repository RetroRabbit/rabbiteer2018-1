﻿// <auto-generated />
using Chatterbox.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Chatterbox.Migrations
{
    [DbContext(typeof(ChatterContext))]
    [Migration("20180114023945_LinkMessageToConv")]
    partial class LinkMessageToConv
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Chatterbox.Models.Conversation", b =>
                {
                    b.Property<long>("ConversationId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ConversationDate");

                    b.Property<long>("ConversationRecipientId");

                    b.Property<long>("ConversationStarterId");

                    b.HasKey("ConversationId");

                    b.ToTable("Conversations");
                });

            modelBuilder.Entity("Chatterbox.Models.Message", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<long>("ConversationId");

                    b.Property<DateTime>("DateSent");

                    b.Property<string>("Text");

                    b.Property<long>("UserIdFrom");

                    b.Property<long>("UserIdto");

                    b.HasKey("Id");

                    b.HasIndex("ConversationId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("Chatterbox.Models.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<DateTime>("RegisterDate");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Chatterbox.Models.Message", b =>
                {
                    b.HasOne("Chatterbox.Models.Conversation")
                        .WithMany("Messages")
                        .HasForeignKey("ConversationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
